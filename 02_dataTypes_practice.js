//number
//string
//boolean
//bigint
//null
//undefined
//symbol =>to make unique variables
//object


//to check type of a variables, we use typeof


let age =6
console.log(typeof 6);
console.log(typeof "hiii");



//primitive and non-primitive datatype-
// 7 types of primitive datatypes are there-> number,string,boolean,bigint,null,undefined,symbol =>to make unique variables

//non-primitive or reference-
//arrays, objects.functions


const array_variable=['apple','mango','banana']


let my_object={
    name:'alpha',   //in object, we store value in key-value pair
    age:"23"
}

const my_function = function () {
    console.log("hello world");
}


//typeof non-primitive  always object, except function
console.log(typeof array_variable);  //object
console.log(typeof my_object); //object
console.log(typeof my_function); //function




//memory allocation in js

//there are two types of memory allocation - 1.stack, 2.heap

//all kind of primitive datatype is stored in stack
// all kind of non-primitive datatype is stored in heap

