// singleton 

// object.create

// object  Literals

const mySym = Symbol("key1")



const jsuser ={
    name  : "Akshar",
    "full name": "Akshr",
    [mySym]: "mykey1",
    age :18,
    location : "jaipur",
    email : "Akshar@google.com",
    isLoggedIn:false,
    lastLoginDays: ["Monday","Saturday"]

}

// console.log(jsuser.email)
// console.log(jsuser["email"])
// console.log(jsuser["full name"])
// console.log(jsuser[mySym])

jsuser.email = "Akshar@chatgpt.com"
// Object.freeze(jsuser)
jsuser.email="Akshar@microsoft.com"

// console.log(jsuser)

jsuser.greeting = function(){
    console.log("hello js user")
}
jsuser.greetingtwo = function(){
    console.log(`hello js user, ${this.name}`)
}
console.log(jsuser.greeting())
console.log(jsuser.greetingtwo())
