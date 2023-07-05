function needForSpeedThree(input) {
    let n = Number(input.shift());
    let stopCommand = input.pop();

    let carsArr = input.slice(0, n);
    let commands = input.slice(n);

    const maxMileage = 100000;
    const minMileage = 10000;
    const maxFuelLitters = 75;

    let cars = {};

    for (let line of carsArr) {
        let [carModel, miles, fuel] = line.split('|');
        miles = Number(miles);
        fuel = Number(fuel);

        if (!cars[carModel]) {
            cars[carModel] = {
                mileage: miles,
                availableFuel: fuel
            }
        }
    }

    for (let line of commands) {
        let [command, currentCar, elOne, elTwo] = line.split(' : ');

        if (command === 'Drive') {
            let distance = Number(elOne);
            let fuel = Number(elTwo);

            if (cars[currentCar].availableFuel < fuel) {
                console.log('Not enough fuel to make that ride');
            } else {
                cars[currentCar].mileage += distance;
                cars[currentCar].availableFuel -= fuel;
                console.log(`${currentCar} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
            }

            if (cars[currentCar].mileage >= maxMileage) {
                delete cars[currentCar];
                console.log(`Time to sell the ${currentCar}!`);
            }

        } else if (command === 'Refuel') {
            let reFuel = Number(elOne);
            let unrefueledFuel = cars[currentCar].availableFuel;

            if (cars[currentCar].availableFuel + reFuel > maxFuelLitters) {
                cars[currentCar].availableFuel = maxFuelLitters;
            } else {
                cars[currentCar].availableFuel += reFuel;
            }

            console.log(`${currentCar} refueled with ${cars[currentCar].availableFuel - unrefueledFuel} liters`);

        } else if (command === 'Revert') {
            let kms = Number(elOne);

            if (cars[currentCar].mileage - kms < minMileage) {
                cars[currentCar].mileage = minMileage;
            } else {
                cars[currentCar].mileage -= kms;
                console.log(`${currentCar} mileage decreased by ${kms} kilometers`);
            }
        }
    }

    let carEntries = Object.entries(cars);

    carEntries.sort((carA, carB) => {
        let carAName = carA[0];
        let carBName = carB[0];

        let carAProperties = carA[1];
        let carBProperties = carB[1];

        if (carAProperties.mileage !== carBProperties.mileage) {
            return carBProperties.mileage - carAProperties.mileage;
        } else {
            return carAName.localeCompare(carBName);
        }
    });

    for (let line of carEntries) {
        let carName = line[0];
        let carProperties = line[1];

        console.log(`${carName} -> Mileage: ${carProperties.mileage} kms, Fuel in the tank: ${carProperties.availableFuel} lt.`);
    }
}