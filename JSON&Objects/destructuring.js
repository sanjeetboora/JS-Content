function games() {
    let arr = ["football", "cricket", "badminton"];
    return arr;
}

// let gamesArr = games();
// console.log(gamesArr);

//let [game1, game2] = gamesArr;
// let [game1, game2] = games();
// console.log(game1);
// console.log(game2);

let [fruit1 = "grapes", fruit2 = "pineapple"] = ["apple"];
// console.log(fruit1);
// console.log(fruit2);


let obj = { name: "Peacock", species: "bird", legs: 2 };
// let { abc, legs } = obj;
// console.log(legs, abc);

//let name, legs;

//({ name, legs } = obj);
//console.log(name, legs);



let obj2 = { names: ["Peacock", "Parrot", "Sparrow"], species: 3, legs: 2, eyes: 2 };
// let { species: noOfBirds, names: birdNames, legs: legsOfBird } = obj2;
let { species: noOfBirds, legs: legsOfBird } = obj2;
//console.log(noOfBirds, legsOfBird);



let person = {
    name: "ramesh",
    gender: "male",
    "age": 30,
    address: {
        add1: "H B 20, N.D.",
        add2: "KL23 NY",
        add3: {
            add31: "gb-12 goa",
            add32: "gb-19 goa"
        }
    }
};

// let { name, gender, address: {
//     add1: addNewDelhi,
//     add3: {
//         add31: addGoa
//     }
// }
// } = person;
// console.log(name, gender, addNewDelhi, addGoa);


//using rest 

let { name, age, ...restOfDetails } = person;
console.log(name, age, restOfDetails);



let [bird1, bird2, ...restOfBirds] = ["peacock", "sparrow", "parrot", "kingfisher", "hen", "cock"];
console.log(bird1, bird2, restOfBirds);
