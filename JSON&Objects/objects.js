let laptop = {
    "color": "Black",
    "name": "thinkpad x1",
    "start": function () {
        console.log("laptop started");
    }
}

console.log(laptop);

let laptopObj = Object.create(laptop);
console.log(laptopObj);


//constructor function
function Laptop(name, color) {
    this.nameOfLaptop = name;
    this.colorOfLaptop = color;
}

let myLaptop = new Laptop("lenovo", "grey");
console.log("myLaptop : ", myLaptop);

let anotherLaptop = Object.assign({}, laptop);

console.log(anotherLaptop);

let arr = [
    ["color", "Green"],
    ["Name", "thinkpad"]
];

let arrObj = Object.fromEntries(arr);
console.log(arrObj);