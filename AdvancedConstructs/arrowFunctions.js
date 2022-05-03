// function fun(a, b) {
//     let result = a + b;
//     return result;
// }
// console.log(fun(1, 2));

//arrow function
// variable_name = (args) => {
//     //body
// }
let fun = (a, b) => {
    let result = a + b;
    return result;
}
console.log(fun(1, 2));

let fun3 = () => console.log("this is an arrow function");
fun3();

let fun4 = (a, b) => a * b;

console.log(fun4(2, 3));