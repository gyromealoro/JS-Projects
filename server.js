const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
app.use(express.json());

const serversFile = path.join(__dirname, "servers.json");

if (!fs.existsSync(serversFile)) {
  let Servers = {
    server1: { users: [], load: 0 },
    server2: { users: [], load: 0 },
    server3: { users: [], load: 0 }
  };
  fs.writeFileSync(serversFile, JSON.stringify(Servers, null, 2));
}

let list = ["server1", "server2", "server3"];

const server_maintenance = (server, data) => data[server]["load"] < 3;

app.get("/servers", (req, res) => {
  let data = fs.readFileSync(serversFile);
  res.json(JSON.parse(data));
});

app.post("/login", (req, res) => {
  let { user } = req.body;
  let data = fs.readFileSync(serversFile);
  let cloud_data = JSON.parse(data);

  let num = Math.floor(Math.random() * list.length);

  if (server_maintenance(list[num], cloud_data)) {
    cloud_data[list[num]].users.push(user);
    cloud_data[list[num]].load += 1;
    fs.writeFileSync(serversFile, JSON.stringify(cloud_data, null, 2));
    res.json({ message: `${user} logged into ${list[num]}` });
  } else {
    res.status(500).json({ message: `Server ${list[num]} unavailable` });
  }
});

app.post("/clear/:server", (req, res) => {
  let data = fs.readFileSync(serversFile);
  let c_data = JSON.parse(data);

  const server = req.params.server;
  if (!c_data[server]) return res.status(404).json({ error: "No such server" });

  c_data[server].users = [];
  c_data[server].load = 0;

  fs.writeFileSync(serversFile, JSON.stringify(c_data, null, 2));
  res.json({ message: `${server} cleared` });
});

app.use(express.static(__dirname));

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
