
function fun() {
    let count = 10;

    return function fun2() {
        count = count + 40;
        console.log(count);
    }
}

let result = fun()();
// result(); //fun2()

let z = 10;

function fun4() {

}

function fun5() {

}