function multi(num){
return num*5
}

multi.power = 2

console.log(multi(5));
console.log(multi.power);
console.log(multi.prototype);


function createUser(username,score){
   this.username = username
   this.score = score
}

createUser.prototype.increment = function(){
   this.score++
}

createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}
// create user er moddhe ami agge increment and printMe di ni tai jonne jokhn amra new function use krbo tokhn amra "new" keyword use krbo

const chai = new createUser("chai", 25)
const tea = new createUser("tea", 250)

chai.printMe()
// tea.increment()