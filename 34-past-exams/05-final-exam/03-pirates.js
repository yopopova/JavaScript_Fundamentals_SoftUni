function pirates(input) {
    let endCommand = input.pop();
    let sailIndex = input.indexOf('Sail');

    let townsInput = input.slice(0, sailIndex);
    let actionInput = input.slice(sailIndex + 1);

    let towns = {};

    for (let townLine of townsInput) {
        let [townName, townPopulation, townGold] = townLine.split('||');
        townPopulation = Number(townPopulation);
        townGold = Number(townGold);

        if (!towns[townName]) {
            towns[townName] = {
                population: 0,
                gold: 0
            }

            towns[townName].population += townPopulation;
            towns[townName].gold += townGold;
        }
    }

    for (let actionLine of actionInput) {
        let [currentAction, currentTown, elOne, elTwo] = actionLine.split('=>');

        if (currentAction === 'Plunder') {
            let people = Number(elOne);
            let gold = Number(elTwo);

            towns[currentTown].population -= people;
            towns[currentTown].gold -= gold;

            console.log(`${currentTown} plundered! ${gold} gold stolen, ${people} citizens killed.`);

            if (towns[currentTown].population <= 0 || towns[currentTown].gold <= 0) {
                delete towns[currentTown];
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

    let townNames = Object.keys(towns);

    if (townNames.length === 0) {
        console.log('Ahoy, Captain! All targets have been plundered and destroyed!');
    } else {
        let townsEntries = Object.entries(towns);
        
        townsEntries.sort((townA, townB) => {
            let townAName = townA[0];
            let townBName = townB[0];

            let townAProperties = townA[1];
            let townBProperties = townB[1];
            
            if (townAProperties.gold !== townBProperties.gold) {
                return townBProperties.gold - townAProperties.gold;
            } else {
                return townAName.localeCompare(townBName);
            }
        });

        console.log(`Ahoy, Captain! There are ${townNames.length} wealthy settlements to go to:`);

        for (let currentTown of townsEntries) {
            let currentTownName = currentTown[0];
            let currentTownProperties = currentTown[1];

            console.log(`${currentTownName} -> Population: ${currentTownProperties.population} citizens, Gold: ${currentTownProperties.gold} kg`);
        }
    }
}