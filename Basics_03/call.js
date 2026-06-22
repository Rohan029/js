function SetUserName(username){
    this.username = username
    console.log("called");
    
}

function createUser(username,email,passdord){
    SetUserName.call(this,username)
    
    this.email=email
    this.passdord=passdord
}

const chai = new createUser("Chai", "Chai@fb.com", "123")

console.log(chai);
