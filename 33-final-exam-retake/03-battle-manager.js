function battleManager(input) {
    let resultCommand = input.pop();
    let warriors = {};

    for (let line of input) {
        let [command, elOne, elTwo, elThree] = line.split(':');

        if (command === 'Add') {
            let wName = elOne;
            let wHealth = Number(elTwo);
            let wEnergy = Number(elThree);

            if (!warriors[wName]) {
                warriors[wName] = {
                    health: wHealth,
                    energy: wEnergy
                }
            } else {
                warriors[wName].health += wHealth;
            }

        } else if (command === 'Attack') {
            let attakerName = elOne;
            let defenderName = elTwo;
            let damage = Number(elThree);

            if (warriors[attakerName] && warriors[defenderName]) {
                warriors[defenderName].health -= damage;
                warriors[attakerName].energy -= 1;

                if (warriors[defenderName].health <= 0) {
                    delete warriors[defenderName];
                    console.log(`${defenderName} was disqualified!`);
                }

                if (warriors[attakerName].energy <= 0) {
                    delete warriors[attakerName];
                    console.log(`${attakerName} was disqualified!`);
                }
            }

        } else if (command === 'Delete') {
            let username = elOne;

            if (username === 'All') {
                warriors = {};
            } else {
                if (warriors[username]) {
                    delete warriors[username];
                }
            }
        }
    }

    let warriorEntries = Object.entries(warriors);
    let warriorsCount = warriorEntries.length;
    console.log(`People count: ${warriorsCount}`);

    warriorEntries.sort((wA, wB) => {
        let wAName = wA[0];
        let wBName = wB[0];

        let wAProperties = wA[1];
        let wBProperties = wB[1];

        if (wAProperties.health !== wBProperties.health) {
            return wBProperties.health - wAProperties.health;
        } else {
            return wAName.localeCompare(wBName);
        }
    });

    for (let line of warriorEntries) {
        let warriorName = line[0];
        let warriorProperties = line[1];
        console.log(`${warriorName} - ${warriorProperties.health} - ${warriorProperties.energy}`);
    }
}