//Primitive
/*
7 types: 
    1 String
    2 Number
    3 Boolean
    4 Null
    5 Undefined
    6 Symbol
    7 BigInt
*/ 

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const currentTem = null
// let userEmail = undefined 
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')


const bigNumber =  902495304850345345345345n

//This comment is added by the linux user

//Non-Primitive or Refrence types
/* 
    1 Arrays
    2 Objects
    3 Functions
*/

const heros = ["shaktiman", "baalveer", "Jujutsu"]

let myObj = {
    name: "ali",
    age: 18,
}


const myFunction = function(){
    console.log("Hello, World!!");
}

//assignment: write data types


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive), Heap (Non-Primitive)

let myYoutubename = "TechnoGammmerz.in"

let anothername = myYoutubename
anothername = "chai aur code"

console.log(myYoutubename);
console.log(anothername);


let user1 = {
    email: "user@google.omc",
    Upi: "user@YBL",
}

let userTwo = user1

userTwo.email = "lalu@gmail.com"

console.log(user1.email);
console.log(userTwo.email);
