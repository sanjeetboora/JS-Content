function sortingArr(N, arr){
    let operations =0;
    let sorted = false;
    while(sorted != true){ //O((N-1 )* N) => O(N^2)
        sorted = true;
        for(let i=0; i<N; i++){ //O(N)
            if(arr[i] == 1 && arr[i+1] == 0){
                [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
                i++;
                sorted=false;
            }
        }
        if(sorted == false){
          operations++;
        }
    }
    return operations;    
}
let N = 3;
let arr = [1, 0, 0];
let result = sortingArr(N, arr);
console.log(result);