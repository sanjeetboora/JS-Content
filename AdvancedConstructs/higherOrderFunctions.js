
function fun() {
    console.log("fun is called");
}

function fun2(func) { //higher order function
    console.log("inside function fun2");
    func();
}

fun2(fun);

function fun3() { //higher order function
    console.log("inside function fun3");
    return function () {
        console.log("returned by fun3");
    }
}

let result = fun3();
result();

let arr = [10, 30, 40];
let arr1 = arr.filter((item) => {
    if (item > 20) {
        return true;
    } else {
        return false;
    }
})
console.log(arr1);