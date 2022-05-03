function beautifulCount(L, R){
    let count =0;
    for(let n = L; n<=R; n++){
        let sum = 0;
        n.toString().split('').map((digit, idx)=>{
           sum += (parseInt(digit) + (idx+1))%2;
        })
        if(sum > 0){
            count++;
        }
    }
    return count;
}
let L = 2;
let R = 10;

let beautifulNoCount = beautifulCount(L, R);
console.log(beautifulNoCount);