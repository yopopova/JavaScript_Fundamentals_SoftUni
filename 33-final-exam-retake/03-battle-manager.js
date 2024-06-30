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

battleManager(["Add:Mark:1000:5",
    "Add:Clark:1000:2",
    "Attack:Clark:Mark:500",
    "Attack:Clark:Mark:800",
    "Add:Charlie:4000:10",
    "Results"]);

battleManager(["Add:Bonnie:3000:5",
    "Add:Kent:10000:10",
    "Add:Johny:4000:10",
    "Attack:Johny:Bonnie:400",
    "Add:Johny:3000:5",
    "Add:Peter:7000:1",
    "Delete:Kent",
    "Results"]);

battleManager(["Add:Bonnie:3000:5",
    "Add:Johny:4000:10",
    "Delete:All",
    "Add:Bonnie:3333:3",
    "Add:Aleks:1000:70",
    "Add:Tom:4000:1",
    "Results"]);