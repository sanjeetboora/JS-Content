function  minDistance(X, N, D){
    X = Math.abs(X);
    let totalDis = N*D;
    if(totalDis <= X){
        return X-totalDis;
    }else{
        let reqMoves = X/D;
        let remDis = X%D;
        let remMoves = N - reqMoves;
        if(remMoves % 2 == 1){//remaining moves are odd
            return Math.abs(D - remDis);
        }
        else{//remaining moves are even
            return remDis;
        }
    }
}

let N = 5;
let X = 10;
let D = 3;
let minDis = minDistance(X, N, D);
console.log(minDis);