function garage(input) {
    let allGarages = new Map();

    for(let line of input) {
        line = line.split(' - ');
        let currGarage = line[0];
        let currCar = line[1];

        if(!allGarages.has(currGarage)) {
            allGarages.set(currGarage, []); // This is how we create the garage a.k.a the car array.
        }

        allGarages.get(currGarage).push(currCar); // This is how we add the cars to the garage.
    }

    // let output = Array.from(allGarages.entries()); // This is how we turn it into an array.

    for (let entry of allGarages) {
        console.log(`Garage № ${entry[0]}`);

        for(let subEntry of entry[1]) {
            while(subEntry.includes(':')) {
                subEntry = subEntry.replace(':', ' -');
            }
            console.log(`--- ${subEntry}`);
        }
    }
}

garage(['1 - color: blue, fuel type: diesel', '1 - color: red, manufacture: Audi', '2 - fuel type: petrol', '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']);