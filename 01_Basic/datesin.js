
let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toLocaleTimeString())
console.log(myDate.toLocaleString())

console.log(typeof myDate)


let myCreatedDate =new Date(2023 , 0 ,23,5,3)
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

console.log(Math.floor(Date.now()/1000));


let newDate = new Date()

console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());


newDate.toLocaleDateString('default',{
    weekday : "long"
})
