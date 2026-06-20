// let myName = "Rohan"
// let mychannel = "chai"

// console.log(myName.trueLength);
let myHero = ["Thor","Spiderman"]

let heroPower = {
    thor: "Hammer",
    spiderman: "Sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}
Object.prototype.rohan = function(){
    // console.log(`rohan is present in all object`);
    
}

Array.prototype.rohanOne = function(){
    // console.log(`Rohan say's HELLO`);
}
// heroPower.rohan()

// console.log(heroPower.getSpiderPower());
// myHero.rohan()
// myHero.rohanOne()
// heroPower.rohanOne()


//inheritance

const User = {
    name:"Chai",
    email:"Chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUserName = "ChaiAurCode        "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    
    console.log(`true length is: ${this.trim().length}`);
    
}
anotherUserName.trueLength()

"Rohan           ".trueLength()