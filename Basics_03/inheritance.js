class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`username is ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username, email, password){
        
        super(username)
        this.email = email
        this.password=password

    }

    addCourses(){
        console.log(`A new course was added by ${this.username}`);
        
    }

}

const chai = new Teacher("Chai","chai@gmail.com","123")

// chai.addCourses();

const masalachai = new User("Masalachai")

masalachai.logMe();

chai.logMe()

// console.log(chai === masalachai);

console.log(chai instanceof Teacher);
console.log(chai instanceof User);
