//singleton is made up of constructor
// object.create 



//object literals or non singleton object

const mySymbol = Symbol("Key1")


const jsuser = {
    name:"Rohan",
    "full name":"Rohan sutradhar",
    [mySymbol]: "MyKey1",
    age:24,
    locatio: "Kolkata",
    email:"rohan@google.com",
    isLoggedIn: false,
    lastLoggedInDays: ['Monday','Saturday']
}

// console.log(jsuser.email);
// console.log(jsuser["email"]);
// console.log(jsuser["full name"]);
// console.log(jsuser[mySymbol]);

// jsuser.email = "Rohan@yahoo.com"
// Object.freeze(jsuser)

// jsuser.email = "Rohan@microsoft.com"
// console.log(jsuser.email);
// console.log(jsuser);

// ==================functions==================


jsuser.greeting = function(){
    console.log("Hello JS user");
    
}
console.log(jsuser.greeting());


jsuser.greetingtwo = function(){
    console.log(`Hello JS user ${this["full name"]}`);
    
}
console.log(jsuser.greetingtwo());
