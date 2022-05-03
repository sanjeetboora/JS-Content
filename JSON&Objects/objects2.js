let person = {
    "name": "Abc",
    "age": 25,
    "occupation": "engineer"
}

console.log(person);

// for (let k in person) {
//     console.log("key is : ", k, " and value is : ", person[k]);
// }

// let keys = Object.keys(person);
// console.log(keys);
// let values = Object.values(person);
// console.log(values);

// let properties = Object.entries(person);
// console.log(properties);

// let anotherObject = Object.fromEntries(properties);
// console.log(anotherObject);

// let isPersonFreezed = Object.isFrozen(person);
// console.log(isPersonFreezed);
// Object.freeze(person);
// person.name = "xyz";
// delete person.age;
// person.nationality = "Indian";
// console.log(person);
// isPersonFreezed = Object.isFrozen(person);
// console.log(isPersonFreezed);


// let isPersonSealed = Object.isSealed(person);
// console.log(isPersonSealed);

// Object.seal(person);
// person.name = "Jiya";
// person.nationality = "Indian";
// delete person.name;
// console.log(person);

// isPersonSealed = Object.isSealed(person);
// console.log(isPersonSealed);


let obj1 = {
    "name": "Abc"
};
// let obj2 = {
//     "name": "Abc"
// }
let obj2 = Object.assign(obj1);
// let objEqual = Object.is(obj1, obj2);
// console.log(objEqual);

if (obj1 == obj2) {
    console.log("both objects are equal");
}