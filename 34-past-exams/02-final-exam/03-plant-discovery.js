function plantDiscovery(input) {
    let n = Number(input.shift());
    let exhibitionCommand = input.pop();

    let plants = input.slice(0, n);
    let commands = input.slice(n);

    let plantsList = {};

    for (let line of plants) {
        let [plant, plantRarity] = line.split('<->');
        plantRarity = Number(plantRarity);

        if (!plantsList[plant]) {
            plantsList[plant] = {
                rarity: plantRarity,
                rating: 0,
                rateCount: 0,
                averageRate: []
            }
        } else {
            plantsList[plant].rarity = plantRarity;
        }
    }

    for (let line of commands) {
        let [command, ...items] = line.split(': ');

        for (let line of items) {
            let [flower, num] = line.split(' - ');

            if (plantsList.hasOwnProperty(flower)) {

                if (command === 'Rate') {
                    let rate = Number(num);

                    plantsList[flower].rating += rate;
                    plantsList[flower].rateCount += 1;

                } else if (command === 'Update') {
                    let newRarity = Number(num);
                    plantsList[flower].rarity = newRarity;

                } else if (command === 'Reset') {
                    plantsList[flower].rating = 0;
                }

            } else {
                console.log('error');
            }
        }
    }

    let listEntries = Object.entries(plantsList);

    for (let line of listEntries) {
        let flowerName = line[0];
        let flowerProperties = line[1];

        let avRate = flowerProperties.rating / flowerProperties.rateCount;
        flowerProperties.averageRate.push(avRate);
    }

    listEntries.sort((a, b) => {
        let planAName = a[0];
        let plantBName = b[0];

        let plantAProperties = a[1];
        let plantBProperties = b[1];

        if (plantAProperties.rarity === plantBProperties.rarity) {
            return plantBProperties.averageRate[0] - plantAProperties.averageRate[0];
        } else {
            return plantBProperties.rarity - plantAProperties.rarity;
        }
    });

    console.log('Plants for the exhibition:');

    for (let line of listEntries) {
        let plantName = line[0];
        let plantProperties = line[1];

        console.log(`- ${plantName}; Rarity: ${plantProperties.rarity}; Rating: ${plantProperties.averageRate[0].toFixed(2)}`);
    }
}