function trial(shots, N, ShipHealth, mainShipDamage, sideShipDamage){
    let neededShots = 0;
    for(let i =0; i<N; i++){
        let remHealth = ShipHealth[i] - shots*sideShipDamage;
        remHealth = Math.max(remHealth, 0);
        neededShots += Math.floor((remHealth + mainShipDamage - sideShipDamage - 1) / (mainShipDamage - sideShipDamage));
    } 
    return neededShots <= shots ? true : false;
}
function minShots(N, ShipHealth, mainShipDamage, sideShipDamage, cannonHealth, cannonDamage){
    let start =0;
    let end = 1000000000;
    while(start != end){ //O(N*log(100000000))
        let mid = Math.floor((start + end)/2);
        if(trial(mid, N, ShipHealth, mainShipDamage, sideShipDamage) == true){
            end = mid;
        }
        else{
            start = mid+1;
        }
    }
    if(cannonHealth >= start*cannonDamage){
        return start;
    }
    else{
        return -1;
    }
}

let N = 4;
let ShipHealth = [8, 7, 5, 1];
let mainShipDamage = 5;
let sideShipDamage = 3;
let cannonHealth =10;
let cannonDamage = 2;
let result = minShots(N, ShipHealth, mainShipDamage, sideShipDamage, cannonHealth, cannonDamage);
console.log(result);