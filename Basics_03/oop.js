const user = {
    username:"Rohan",
    loginCount : 8,
    signedIn: true, 
    getUserDetails : function(){
        // console.log("Got the user details from DB");
        // console.log(`username: ${this.username}`);
        console.log(this);
        
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

function User(username, loginCount, isloggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isloggedIn= isloggedIn
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
        
    }
    return this
}
//constructor funcation

const userOne = new User("Rohan", 12, true)
const userTwo = new User("Prathama", 10,false)
console.log(userOne.constructor);
// console.log(userTwo);


