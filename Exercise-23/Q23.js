var car = 'subaru';
var truck = 'volvo';
var vehicle = {
    type: 'car',
    model: 2023,
    make: 'sacania',
    category: 'sedan'
};
console.log("This statement is: ".concat(car === 'subaru' ? 'true' : 'false', "."));
console.log("This statement is: ".concat(car === 'lambourghini' ? 'true' : 'false', "."));
console.log("This statement is: ".concat(truck === 'volvo' ? 'true' : 'false', "."));
console.log("This statement is: ".concat(truck === 'nisaan' ? 'true' : 'false', "."));
console.log("The vehicle is type of truck: ".concat(vehicle.type === 'truck' ? 'true' : 'false', "."));
console.log("The vehicle is type of car: ".concat(vehicle.type === 'car' ? 'true' : 'false', "."));
console.log("The vehicle is model is less than 2020: ".concat(vehicle.model < 2020 ? 'true' : 'false', "."));
console.log("The vehicle's make company is sacania: ".concat(vehicle.make === 'sacania' ? 'true' : 'false', "."));
console.log("The vehicle's make company is hundai: ".concat(vehicle.make === 'hundai' ? 'true' : 'false', "."));
console.log("The vehicle's category is SUV: ".concat(vehicle.category === 'suv' ? 'true' : 'false', "."));
