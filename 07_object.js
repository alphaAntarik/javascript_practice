//we can access objects in two types-

//singleton
//Object.create()


//literals
const my_obj={  //holds value in key value pair, key is by default stored in string type
    name:"Alpha",
    "full name":"alpha antarik",
    age:18,
    isLoggesin:false,
    days:["mon","tue"]

}

console.log(my_obj.age);
console.log(my_obj["age"]);//another way
console.log(my_obj["full name"]);