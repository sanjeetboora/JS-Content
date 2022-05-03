
// function fun(arr) {
//     arr[0] = "strawberry";
// }


// let arr = ["apple", "guvava", "grapes"];
// console.log("before function call : ", arr);
// fun(arr);
// console.log("after function call : ", arr);

function fun2(myObj, y) {
    myObj.name = "Seema";
    y = 20;
    return;
}

let obj = {
    name: "Neha",
    class: 10
}
let x = 10;
console.log("before function call : ", obj, x);
fun2(obj, x);
console.log("after function call : ", obj, x);