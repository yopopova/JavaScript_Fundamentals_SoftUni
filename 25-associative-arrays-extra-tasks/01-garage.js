function garage(input) {
    let allGarages = new Map();

    for(let line of input) {
        line = line.split(' - ');
        let currGarage = line[0];
        let currCar = line[1];

        if(!allGarages.has(currGarage)) {
            allGarages.set(currGarage, []);
        }

        allGarages.get(currGarage).push(currCar);
    }

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