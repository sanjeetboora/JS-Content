function factorial(n) {
    //base case
    if (n == 0) {
        return 1;
    }
    //self work
    return n * factorial(n - 1); //assumption/recursive call
}

let result = factorial(0);
console.log(result);