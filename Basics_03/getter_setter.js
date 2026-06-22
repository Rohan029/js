class User{
    constructor(email,password){
        this.email = email
        this.password = password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        return this._email = value
    }


    get password(){
        return  `${this._password}rohan`
    }
    set password(value){
    this._password = value 
    }
}

const rohan = new User("rohan@gmail.com", "abc")

console.log(rohan.email);


