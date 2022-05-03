function subtractArrays(currArr, targetArr){ //O(M)
    let C = currArr[0] - targetArr[0];
    if(C < 0){ //diff -ve
        return false;
    }
    else{ //diff +ve
        for(let i=0; i<currArr.length; i++){
            if(currArr[i] - targetArr[i] != C){
                return false;
            }
        }
    }
    return true;
}

function NArrays(N, arr){ //O(N*M)
    //find target array O(N)
    let targetArr = 0;
    let minNum = Infinity;
    for(let i =0; i<N; i++){
        if(arr[i][0] < minNum){
            minNum = arr[i][0];
            targetArr = i;
        }
    }

    //try to convert every array to target array
    for(let i=0; i<N; i++){ //O(N*M)
        if(i != targetArr){
            let result =  subtractArrays(arr[i],arr[targetArr]); //O(M)
            if(result == false){
                return false;
            }
        }
    }
    return true;
}

let N = 3;
let arr = [
    [4, 3, 4],
    [2, 1, 3],
    [3, 2, 4]
];

let result = NArrays(N, arr) ? "YES" : "NO";
console.log(result);


