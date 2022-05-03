let fun = (a, b) => {
    console.log("inside function fun");
    return a + b;
}
let result = fun(1, 2);
console.log(result);

function fun2(a, func) {
    console.log(a);
    console.log(func(10, 2));
}
fun2(2, fun);

function fun3() {
    console.log("inside function fun3");
    return function () {
        console.log("returned function");
    }
}
fun3()();