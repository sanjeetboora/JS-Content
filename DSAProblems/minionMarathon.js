function minimumRefreshments(L, K, maxCalories, posFoodStall){ //O(K)
    let dist = L-1;
    let currCal = maxCalories;
    let distToFoodStall = posFoodStall - 1;
    let distFoodStallToEnd = dist - distToFoodStall;
    let haveRefreshment = 0;
    for(let round = 1; round <= K; round++){
        //can go to foodStall
        if((currCal - distToFoodStall) < 0){ // not possible
            return -1; 
        }else{
            currCal = currCal - distToFoodStall;
        }

        if(round != K){ //round is not last
            if((currCal - 2*distFoodStallToEnd) < 0){
                haveRefreshment++;
                currCal = maxCalories;
            }
        }
        else{// last round
            if((currCal  - distFoodStallToEnd) < 0){
                haveRefreshment++;
                currCal = maxCalories;
            }
        }

        currCal = currCal - distFoodStallToEnd;
        [distToFoodStall, distFoodStallToEnd] = [distFoodStallToEnd, distToFoodStall];
    }
    return haveRefreshment;
}


let L = 7;
let K = 4;
let B = 2;
let S = 3;
let result = minimumRefreshments(L, K, B, S);
console.log(result);