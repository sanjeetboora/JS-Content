function maxMoney(N, V, L, speed){
    speed.sort((a, b) => b-a);
    let totalMoney = 0;
    for(let i =0; i<V*L; i++){
        totalMoney = totalMoney + speed[i];
    }
    return totalMoney;
}
let N = 9;
let V = 3;
let L = 2;
let speed = [2, 5, 5, 4, 2, 2, 3, 1, 1];
let result = maxMoney(N, V, L, speed);
console.log(result);