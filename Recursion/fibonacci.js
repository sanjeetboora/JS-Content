function fib(n) {
    //base case
    if (n == 0 || n == 1) {
        return n;
    }
    //self work
    return fib(n - 1) + fib(n - 2); //assumption
}

let result = fib(5);
console.log(result);