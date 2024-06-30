class myClass{

    constructor(username, password){
        this.username=username
        this.password=password
    }   //this constructor is optional..i.e, if there is variable, then we have to define constructor, otherwise not

    encrypt_password(){
        return `${this.password}abc`
    }
}

let my_obj=new myClass('antarik','1234')

console.log(my_obj.encrypt_password());


//inheritance

class user_details extends myClass{

    constructor(username, password,useremail, phonenumber){
        super(username, password);
                //for getting the parent's member we will use super keyward
               
        this.useremail=useremail;
        this.phonenumber=phonenumber;
    }



}

let user= new user_details('example@gmail.com','9876543210')

console.log(user.password);



