function minimumMovesOptimized(N){
    let minMoves = Infinity;
    for(let i = parseInt(Math.sqrt(N)); i>= 1; i--){
        if(N % i == 0 ){
            let j = N/i;
            let currMoves = i+j;
            minMoves = currMoves;
            break;
        }
    }
    return minMoves;
    
}
function minimumMoves(N){
    let minMoves = Infinity;
    for(let i =1; i<= Math.sqrt(N); i++){
        if(N % i == 0 ){
            let j = N/i;
            let currMoves = i+j;
            if(minMoves > currMoves){
                minMoves  = currMoves;
            }
        }
    }
    return minMoves;
}
let N = 12;
let moves = minimumMovesOptimized(N);
console.log(moves);