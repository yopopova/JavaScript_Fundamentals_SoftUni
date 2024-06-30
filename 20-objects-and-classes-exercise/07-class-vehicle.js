class Vehicle {
    constructor(type, model, { engine, power }, fuel) {
        // ^ {engine, power} - this entry is also a kind of destructuring since we know we're going to accept an object.

        this.type = type,
        this.model = model,
        this.parts = {
            engine,
            power,
            quality: engine * power
        }
        this.fuel = Number(fuel)
    }

    drive(fuelLoss) {
        return this.fuel -= fuelLoss;
    }

    // ^ We write the function outside the construct, because by condition we have no passed parameter for it in the construct.
}

let parts = { engine: 6, power: 100 };
let vehicle = new Vehicle('a', 'b', parts, 200);
vehicle.drive(100);
console.log(vehicle.fuel);
console.log(vehicle.parts.quality);

// let parts = { engine: 9, power: 500 };
// let vehicle = new Vehicle('l', 'k', parts, 840);
// vehicle.drive(20);
// console.log(vehicle.fuel);