    function saymyName(){
        console.log("A");
        console.log("K");
        console.log("S");
        console.log("H");
        console.log("A");
        console.log("R")

    }

    // saymyName()

    // function addTwoNumbers(number1, number2){
        

    //     console.log(number1+number2);

    // }

    function addTwoNumbers(number1, number2){
        

        // let result = number1+number2
        // console.log("Akshar")
        // return result
        return number1+number2

        

    }

const result=  addTwoNumbers(3,5)

// console.log("result: ",result);


function loginusermessage(username = "sam"){
    if(username === undefined){
        console.log("please enter a user");
        return 
    }
    return `${username} just logged in`
}

// console.log(loginusermessage("Akshar"))
// console.log(loginusermessage("Akshar"))



function calculatecartprice(val1,val2, ...num1){   // rest
    return num1
}

// console.log(calculatecartprice(200,400,500,2000))

const user ={
    username : "Akshar",
    prices: 199
}

function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleobject(user)

handleobject({
    username : "sam",
    price:399
})

const myNewArray = [200,400,100,600]

function returnSecondvalue(getArray){
    return getArray[1]

}
// console.log(returnSecondvalue(myNewArray));

console.log(returnSecondvalue([200,400,100,600]));
