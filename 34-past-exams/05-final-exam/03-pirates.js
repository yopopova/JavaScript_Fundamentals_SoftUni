function pirates(input) {
    let endCommand = input.pop();
    let sailIndex = input.indexOf('Sail'); // Find the index of the 'Sail' command.

    let townsInput = input.slice(0, sailIndex); // Create a new array from only the elements before the 'Sail' command.
    let actionInput = input.slice(sailIndex + 1); // We also create a second array in which we do not include the 'Sail' command, only the remaining elements.

    let towns = {}; // Create an object to fill with objects.

    for (let townLine of townsInput) {
        let [townName, townPopulation, townGold] = townLine.split('||');
        townPopulation = Number(townPopulation);
        townGold = Number(townGold);

        if (!towns[townName]) {
            // ^ If no town with such name [townName] exists in the 'towns' object, we create it.

            towns[townName] = {
                // ^ Create the town name as a key in the 'towns' object.
                population: 0,
                gold: 0
                // ^ Initially both values ​​are 0. This is only in cases where the town does not exist in the 'towns' object.
            }

            towns[townName].population += townPopulation;
            towns[townName].gold += townGold;
            // ^ Regardless of whether the city exists or not, we add the population and gold to it.
            // ^ If the city does not already exist, it will be created with 0 and then the values ​​will be added to it.
        }
    }

    // console.log(); // To debug objects, we must have console.log(), even if it's empty, otherwise the debugger won't start.

    for (let actionLine of actionInput) {
        let [currentAction, currentTown, elOne, elTwo] = actionLine.split('=>');

        if (currentAction === 'Plunder') {
            let people = Number(elOne);
            let gold = Number(elTwo);

            towns[currentTown].population -= people;
            towns[currentTown].gold -= gold;
            // ^ 'towns' is the object we created and populated, and 'currentTown' is the current town,
            // ^ which we are looking for in the object to change something - in this case to get the killed people and the stolen gold out of the city.

            console.log(`${currentTown} plundered! ${gold} gold stolen, ${people} citizens killed.`);

            if (towns[currentTown].population <= 0 || towns[currentTown].gold <= 0) {
                delete towns[currentTown]; // This is how we delete the key and its adjacent values ​​from the object.
                console.log(`${currentTown} has been wiped off the map!`);
            }

        } else if (currentAction === 'Prosper') {
            let prGold = Number(elOne);

            if (prGold < 0) {
                console.log('Gold added cannot be a negative number!');
            } else {
                towns[currentTown].gold += prGold;
                console.log(`${prGold} gold added to the city treasury. ${currentTown} now has ${towns[currentTown].gold} gold.`);
            }
        }
    }

    let townNames = Object.keys(towns); // So we can see all the keys in the object, via 'console.log()'.

    if (townNames.length === 0) { // This is how we check if there are elements in the object, if it is not empty.
        console.log('Ahoy, Captain! All targets have been plundered and destroyed!');
    } else {
        let townsEntries = Object.entries(towns);
        // ^ So we turn the object into an array of small arrays that contain the name of the city and an object of the population and gold values.
        
        townsEntries.sort((townA, townB) => {
            let townAName = townA[0];
            let townBName = townB[0];
            // ^ Here we sort the cities.

            let townAProperties = townA[1];
            let townBProperties = townB[1];
            // ^ Here we sort by the properties of the grabs.
            
            if (townAProperties.gold !== townBProperties.gold) {
                // ^ If our gold is different we will return according to it.
                return townBProperties.gold - townAProperties.gold;
            } else {
                // ^ If our gold is equal, we will return by name.
                return townAName.localeCompare(townBName); // ascending order
            }
        });

        console.log(`Ahoy, Captain! There are ${townNames.length} wealthy settlements to go to:`);

        for (let currentTown of townsEntries) {
            let currentTownName = currentTown[0];
            let currentTownProperties = currentTown[1];
            // ^ We're doing it like this here because 'split()' won't do for us.

            console.log(`${currentTownName} -> Population: ${currentTownProperties.population} citizens, Gold: ${currentTownProperties.gold} kg`);
        }
    }
}

pirates(["Tortuga||345000||1250", "Santo Domingo||240000||630", "Havana||410000||1100", "Sail", "Plunder=>Tortuga=>75000=>380", "Prosper=>Santo Domingo=>180", "End"]);