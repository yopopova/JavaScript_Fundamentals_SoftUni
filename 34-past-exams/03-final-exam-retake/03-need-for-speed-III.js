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
            let unrefueledFuel = cars[currentCar].availableFuel; // Save the initial value to use later.

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

// needForSpeedThree([
//     '3',
//     'Audi A6|38000|62',
//     'Mercedes CLS|11000|35',
//     'Volkswagen Passat CC|45678|5',
//     'Drive : Audi A6 : 543 : 47',
//     'Drive : Mercedes CLS : 94 : 11',
//     'Drive : Volkswagen Passat CC : 69 : 8',
//     'Refuel : Audi A6 : 50',
//     'Revert : Mercedes CLS : 500',
//     'Revert : Audi A6 : 30000',
//     'Stop']);

needForSpeedThree([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop']);