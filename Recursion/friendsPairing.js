function ways(n) {
    //base case
    if (n == 1 || n == 2) {
        return n;
    }
    //self work
    let totalWays = ways(n - 1) + (n - 1) * ways(n - 2); //assumption
    return totalWays;
}

let n = 4;
let result = ways(n);
console.log(result);