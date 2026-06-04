// const tinderUser = new Object() singleton object

const tinderUser = {} //non singleton object
 tinderUser.id = "123abc"
 tinderUser.name = "abc"
 tinderUser.isloggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "rohan@gpt.com",
    fullname:{
        userfullName:{
            firstName:"Rohan",
            lastName:"Sutradhar"
        }
    }
}

// console.log(regularUser.fullname?.userfullName.firstName);

const obj1 = {
    1:"a",
    2:"b"
}

const obj2 = {
    3:"c",
    4:"d"
}

// const obj3 = {
//     obj1, obj2
// }
// const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3);
// const obj3 = {...obj1,...obj2} //best
// console.log(obj3);

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty('isloggedIn'));
