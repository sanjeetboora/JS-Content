// let name = "Mohit";
// //pure function
// function fun(name, name2) {
//     return name + name2;
// }

// let name2 = "Saxena";

// console.log("before function call");
// console.log(name, name2);

// let st1 = fun(name, name2);
// let st2 = fun(name, name2);

// console.log("after function call");
// console.log(name, name2);
// console.log(st1);
// console.log(st2);

//====================================================
//impure functions
let x = 10;
function fun2() {
    x = x + 20;
    return x;
}

console.log("before the function call : ", x);
console.log("value retuned by first call ", fun2());
console.log("after the first function call : ", x);
console.log("value retuned by second call ", fun2());
console.log("after the second function call : ", x);
console.log("value retuned by third call ", fun2());