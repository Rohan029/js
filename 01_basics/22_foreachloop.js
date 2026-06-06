const coding = ['js','rubi','java','py','cpp','c']

// coding.forEach( function (value){
//     console.log(value);
// })

// coding.forEach( (item) => {
// console.log(item);
// })

// function printMe (item){
//     console.log(item);
// }

// coding.forEach( printMe )


// coding.forEach((item, index, arr)=>{
// console.log(item, index, arr);

// })

const myCoding = [
    {
        languageName : "JavaScript",
        languageFileName : "js"
    },
    {
        languageName : "python",
        languageFileName : "py"
    },
    {
        languageName : "java",
        languageFileName : "jv"
    },
]

myCoding.forEach((item)=>{
console.log(item.languageName, item.languageFileName);

})