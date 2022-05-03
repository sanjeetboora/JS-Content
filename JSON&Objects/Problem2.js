let car = {
    brand: "BMW",
    color: "black"
}

let car2 = {
    brand: "Audi",
    color: "white"
}


function makeSentences(car) {
    console.log(`I have ${car.brand} in ${car.color} color`);
}

makeSentences(car);
makeSentences(car2);