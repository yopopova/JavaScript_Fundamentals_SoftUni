function treasureHunt(input) {
    let chest = input.shift().split('|');
    let line = input.shift();

    while (true) {
        let [command, ...items] = line.split(' '); // We separate the command with command and separate the elements to the command in an array.

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
                // ^ Here the variable 'loot' is an array and holds the element we have removed from the main array.
                chest.push(loot[0]); // Or chest.push(...loot); -> to get the elements from the 'loot' array.
            }

        } else if (command === 'Steal') {
            let stolenElementsCount = Number(items[0]);
            let stolenTreasure = chest.slice(-stolenElementsCount);
            // ^ With .slice() we take the slice of the array we need and the method automatically inserts it into a new array.
    
            chest.splice(-stolenElementsCount);
            // ^ Here we modify the main array to clear it of the stolen elements and only be able to work with the stuff left in it.
        
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

// treasureHunt(["Gold|Silver|Bronze|Medallion|Cup", "Loot Wood Gold Coins", "Loot Silver Pistol", "Drop 3", "Steal 3", "Yohoho!"]);
treasureHunt(["Diamonds|Silver|Shotgun|Gold", "Loot Silver Medals Coal", "Drop -1", "Drop 1", "Steal 6", "Yohoho!"]);