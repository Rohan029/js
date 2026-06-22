class user {
    constructor(username){
        this.username =username

    }

    logMe(){
        console.log(`username : ${this.username}`);
        
    }

    static createId(){
        return `123`
    }

}

const rohan = new user("Rohan")
// console.log(rohan.createId());

class Teacher extends user{
    constructor(username,email){
        super(username)
        this.email = email

    }
}

const iphone = new Teacher("Iphone","i@phone.com")
iphone.logMe()

console.log(iphone.createId());


