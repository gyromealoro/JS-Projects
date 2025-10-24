let num = 10;
const name = "gyrome";
var z = "20";

num = 30;
let obj = {a:1,
            b:2,
            c:3
}

//calculator using high order function

function add(a,b){
    return a + b;
}
function minus(a,b){
    return a - b;
}
function multiply(a,b){
    return a * b;
}
function devide(a,b){
    return a / b;
}
function calc(func, x, y){
    return func(x,y)
}


let nom = [1,2,3,4]

let nombers = nom.filter(n => n % 2 === 0)
console.log(nombers)








function run(fn){
    fn();
    fn();
}

//console.log(exp2())
function exp2(){
    console.log("HELLO PO ")
}

operations = [add, minus, multiply, devide]

const adds = (num1, num2) => { return num1 + num2 };

const student_list = []


function fill_up(student_name,student_age,student_section){
    const forms = {
        [student_name]: {
            Age: student_age,
            Section: student_section
        }
    };

    student_list.push(forms)
}


let nums = [1,2,3,4,5,6] 

let numbers = nums.filter((n) => n % 2 === 0)
console.log(numbers)



const quickcheck = (name) => {
    //if the name is included/exist inside the students list
    if(student_list.includes(name)){
        console.log("Student is registered")
    }else{
        console.log("The student does not exist in the list of registered student")
    }
}

 //what is the name of the student? 



function thechef(dish){
    return function(name){
        return `${name} your ${dish} is ready`
    }
}

let customer = thechef("Sinigang")

console.log(customer("john"))

