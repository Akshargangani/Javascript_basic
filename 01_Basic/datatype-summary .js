// primitive

//  7 types : string, Number , Boolearn , null , undefined , Symbol , BigInt


const score = 100
const scoreValue =100.3

const isLoggedIn =false
const outsideTemp =null
let userEmail;

const id =Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

// const bigNumber =345678946461681066n

// reference (Non primitive)

// Array,object, functions

const  heros = ["shaktiman", "naagraj","doga"]
let myobj = {
    name: "Name",
    age: 19,
}


const myFuunction = function(){
    console.log("Hello World");
}

console.log(typeof myobj)





// ++++++++++++++++++++++++++++++++++++ //


// Stake (primitive) , Heap (Non-Primitive)

let myYoutubename ="namedotcom"

let anothername = myYoutubename
anothername = "unike"

console.log(anothername);
console.log(myYoutubename)


let userOne = {
    email: "user@google.com",
    upi: "user@ybil"
}

let userTwo = userOne

userTwo.email = "name@google.com"

console.log(userOne.email)
console.log(userTwo.email)