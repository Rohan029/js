const accountId = 123
let accountEmail = "rp@google.com"
var accountPassword = "123"
accountCity = "Kolkata"
accountEmail = "abc@gmail.com"

accountPassword="abc"

accountCity = "Bangalore"

let accountState;


// accountId = 2 //not allowed

console.log(accountId);

/*
prefer not to use var
because of issue in block scope

*/
console.table([accountState,accountEmail,accountId,accountCity,accountPassword])