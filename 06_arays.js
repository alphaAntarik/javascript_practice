let my_array=[0,1,2,3,4]
let my_array_any=[0,1,2,3,4,true,"hii",["apple",false,"mango"]] //this is also valid
//arrays in js is resizable
console.log(my_array);
console.log(my_array_any[7]);
my_array.push([4,'d'])
my_array.push(0)
console.log(my_array);
my_array.pop()
console.log(my_array);
let new_arr=my_array.concat(my_array_any)  //for merging two arrays
console.log(new_arr);

//another way to merging for more than two arrays
let new_another_arr=[...my_array,...my_array_any,...new_arr]
console.log(new_another_arr);

let another_complex_array=[1,2,3,[4,5,[7,5,6,["u","o"]]]]
let simple_array=another_complex_array.flat(Infinity)
console.log(simple_array);
