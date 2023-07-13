function treasureHunt(input) {
    let chest = input.shift().split('|');
    let line = input.shift();

    while (true) {
        let [command, ...items] = line.split(' ');

        if (command === 'Yohoho!') {
            break;
        }

        if (command === 'Loot') {
            for (let i = 0; i < items.length; i++) {
                if (!chest.includes(items[i])) {
                    chest.unshift(items[i]);
                }
            }

        } else if (command === 'Drop') {
            let index = Number(items[0]);

            if (index >= 0 && index < chest.length) {
                let loot = chest.splice(index, 1);
                chest.push(loot[0]);
            }

        } else if (command === 'Steal') {
            let stolenElementsCount = Number(items[0]);
            let stolenTreasure = chest.slice(-stolenElementsCount);
    
            chest.splice(-stolenElementsCount);
        
            console.log(stolenTreasure.join(', '));
        }

        line = input.shift();
    }

    let treasureGain = 0;

    for (let element of chest) {
        treasureGain += element.length;
    }

    let averageTreasureGain = treasureGain / chest.length;

    if (chest.length > 0) {
        console.log(`Average treasure gain: ${averageTreasureGain.toFixed(2)} pirate credits.`);
    } else {
        console.log('Failed treasure hunt.');
    }
}