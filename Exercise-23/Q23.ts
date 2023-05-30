
let car: string = 'subaru';
let truck: string = 'volvo';
let vehicle = {
    type: 'car',
    model: 2023,
    make: 'sacania',
    category: 'sedan',
} 

console.log(`This statement is: ${car === 'subaru' ? 'true' : 'false'}.`);

console.log(`This statement is: ${car === 'lambourghini' ? 'true' : 'false'}.`);

console.log(`This statement is: ${truck === 'volvo' ? 'true' : 'false'}.`);

console.log(`This statement is: ${truck === 'nisaan' ? 'true' : 'false'}.`);

console.log(`The vehicle is type of truck: ${vehicle.type === 'truck'? 'true' : 'false'}.`);

console.log(`The vehicle is type of car: ${vehicle.type === 'car'? 'true' : 'false'}.`);

console.log(`The vehicle is model is less than 2020: ${vehicle.model < 2020 ? 'true' : 'false'}.`);

console.log(`The vehicle's make company is sacania: ${vehicle.make === 'sacania'? 'true' : 'false'}.`);

console.log(`The vehicle's make company is hundai: ${vehicle.make === 'hundai'? 'true' : 'false'}.`);

console.log(`The vehicle's category is SUV: ${vehicle.category === 'suv'? 'true' : 'false'}.`);