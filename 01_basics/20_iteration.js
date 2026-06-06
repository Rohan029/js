// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (element == 5){
//         console.log(`number 5 is the best`);
        
//     }
//     console.log(element);
    
// }

// for (let i = 0; i <= 10; i++) {
//    console.log(`Outer loop value: ${i}`);
   
//     for (let j = 0; j <= 10; j++) {
//         console.log(`inner loop value ${i} and inner loop ${j}`);
        
//     }
// }

// for (let i = 1; i <= 10; i++) {
//    console.log(`Outer loop value: ${i}`);
   
//     for (let j = 1; j <= 10; j++) {
//         console.log(i + "*" + j + "=" + i*j);
        
//     }
// }


// const myArry = ["Rohan", "Raju Paja", "Boni", "Kutti"]

// for (let index = 0; index < myArry.length; index++) {
//     const element = myArry[index];
//     console.log(element);
    
    
// }

//======== while loop ==========

// let index = 0
// while (index <=10) {
//     // console.log(`value of index is ${index}`);
//     index = index +2
// }

// let myArray = ["batman", "Superman", "Flash"]

// let arr = 0
// while (arr<myArray.length) {
//     console.log(`value is ${myArray[arr]}`);
//     arr = arr+1
// }


//========= do while loop =========

// let score = 1
// do {
//     console.log(`score : ${score}`);
//     score++
    
// } while (score <= 10);


// ===========for of loop=========

// const arr = ["Rohan","Raju", "Paja", "Boni"]

// for (const name of arr) {
//     console.log(name);
    
// }

// const greetings = "Hello world"
// for (const greet of greetings) {
//     console.log(`each char is ${greet}`);
    
// }


//==============maps ==================
const map = new Map()
map.set('IN', "INDIA")
map.set('GR', "GERMANY")
map.set('FR', "FRANCE")
map.set('IN', "INDIA") // repeat hobe na
// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ":-", value);
    
}

// object er key and value loop e kora jabe na
const myObject = {
    game1:"NFS",
    game2:"Spiderman"
}

for (const [kry, value] of myObject) {
    console.log(key, ":-", value);
    
}



















