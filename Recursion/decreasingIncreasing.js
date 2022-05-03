// function decreasing(n) {
//     //base case
//     if (n == 0) {
//         return;
//     }

//     console.log(n);//self work
//     decreasing(n - 1); //recursive call/assumption
// }

// decreasing(4);


// function increasing(n) {
//     //base case
//     if (n == 0) {
//         return;
//     }

//     increasing(n - 1); //recursive call/assumption
//     console.log(n);//self work
// }

// increasing(4);


function decreasingIncreasing(n) {
    //base case
    if (n == 0) {
        return;
    }
    console.log(n);//self work
    decreasingIncreasing(n - 1); //recursive call/assumption
    console.log(n);//self work
}

decreasingIncreasing(4);