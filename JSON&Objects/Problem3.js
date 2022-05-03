let str = "occurrences";
let result = {};
for (let i = 0; i < str.length; i++) {
    let currLetter = str.charAt(i);
    if (result[currLetter]) {
        result[currLetter]++;
    }
    else {
        result[currLetter] = 1;
    }
}
console.log(result);

for (let key in result) {
    console.log(`${key} has occurred ${result[key]} times`);
}