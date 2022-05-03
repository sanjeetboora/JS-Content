// function fun(x) {
//     console.log("value of x : ", x);
//     x = 50;
//     console.log("value of x after change : ", x);
//     return;
// }


// let y = 10;
// console.log("before calling fun, y = ", y);
// fun(y);// passing y to function fun
// console.log("after calling fun, y = ", y);
// console.log(y);




function fun2(str) {
    str = str + "my";
    return str;
}

let myStr = "Parrot";
console.log("before function call ", myStr);
console.log(fun2(myStr));
console.log("after function call ", myStr);
