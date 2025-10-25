//????
const fs = require("fs")
const path = require("path");
const data = require("./data.js")
const { log } = require("console")
const Accounts = { //databse for users account assume that they are registered already 
    user1: "john",
    user2: "Micheal",
    user3: "Michell",
    user4: "Mary",
    user5: "Marcus",
    user6: "Hans",

     user7: "Jeremy",
    user8: "Kurt",
    user9: "Singh",
    user10: "Rave",
    user11: "May",
    user12: "Joy"
}



const serversFile = path.join(__dirname, "cloud.json");
let serverID = Math.floor(Math.random() * 10000)

if (!fs.existsSync(serversFile)) {
  let Servers = {
    [serverID]: { users: [], load: 0, status: "Healthy" }
  };
  fs.writeFileSync(serversFile, JSON.stringify(Servers, null, 2));
}

let ser = fs.readFileSync(serversFile)
let ser_data = JSON.parse(ser)
                                                                                    
let serID = Object.keys(ser_data)




function logins(users_name){
  
      proccess_login_request(users_name)
};



function proccess_login_request(user) {
  
    let data = fs.readFileSync(serversFile)
    let cloud_data = JSON.parse(data)

  let num = Math.floor(Math.random() * serID)

        if(server_maintenance(serID[num], cloud_data)){
                //Servers[list[num]]["users"].push(user)
                //Servers[list[num]]["load"] += 1
                //cloud_data[list[num]]["users"].push(user)
                //cloud_data[list[num]]["load"] += 1
          
                
               fs.writeFileSync(serversFile, JSON.stringify(cloud_data, null, 2));
                console.log(`A user named: ${user} has been directed to ${serID[num]}`)
                console.log(`${list[num]} load status: ${cloud_data[serID[num]]["load"]}`)
                console.log("")     

        }else { 

             cloud_data[serverID] = {users: [], load: 0, status: "Healthy"}
              fs.writeFileSync(serversFile, JSON.stringify(cloud_data, null, 2));
        }
    
}





let server_maintenance = (server, data) =>  data[serID]["load"] < 3 //million users


const clearing_data = (ser)  => {
let data = fs.readFileSync(serversFile)
let c_data = JSON.parse(data)

let clean = c_data[ser]["users"] = []//empty the array
//clean.splice(0,clean.length)
let clean_load = c_data[ser]["load"] = 4
console.log("data has been wiped")

fs.writeFileSync(serversFile, JSON.stringify(c_data, null, 2));

};


logins(Accounts["user1"])
//clearing_data(3561)



console.log("hEELO")


/*

const obj = { name: "Krissj", age: 20 };
const str = JSON.stringify(obj);

console.log(str); // {"name":"Krissj","age":20}
const ob = JSON.parse(str)
console.log(ob)

*/