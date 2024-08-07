function manOWar(input) {
    let pirateShip = input.shift().split('>').map(x => Number(x));
    let warShip = input.shift().split('>').map(x => Number(x));
    let maxHealth = Number(input.shift());
    input.pop();
    let sectionsToRepair = 0;
    let isSunken = false;
    let inputL = input.length;

    for (let i = 0; i < inputL; i++) {
        let [command, numOne, numTwo, numThree] = input[i].split(' ');
        
        if (command === 'Fire') {
            let indexFire = Number(numOne);
            let damageFire = Number(numTwo);

            if (indexFire >= 0 && indexFire < warShip.length) {
                warShip[indexFire] = warShip[indexFire] - damageFire;

                if (warShip[indexFire] <= 0) {
                    console.log('You won! The enemy ship has sunken.');
                    isSunken = true;
                    break;
                }
            }

        } else if (command === 'Defend') {
            let startIndex = Number(numOne);
            let endIndex = Number(numTwo);
            let damage = Number(numThree);

            if (startIndex >= 0 && startIndex < pirateShip.length && endIndex >= 0 && endIndex < pirateShip.length) {
                for (let j = startIndex; j <= endIndex; j++) {
                    pirateShip[j] -= damage;

                    if (pirateShip[j] <= 0) {
                        console.log('You lost! The pirate ship has sunken.');
                        isSunken = true;
                        break;
                    }
                }
            }

        } else if (command === 'Repair') {
            let index = Number(numOne);
            let bonusHealth = Number(numTwo);

            if (index >= 0 && index < pirateShip.length) {
                if (pirateShip[index] + bonusHealth <= maxHealth) {
                    pirateShip[index] = pirateShip[index] + bonusHealth;
                } else {
                    pirateShip[index] = maxHealth;
                }
            }

        } else if (command === 'Status') {
            for (let k = 0; k < pirateShip.length; k++) {
                let section = pirateShip[k];
                let needRepair = maxHealth * 0.2;

                if (section < needRepair) {
                    sectionsToRepair++;
                }
            }

            console.log(`${sectionsToRepair} sections need repair.`);
        }
    }

    if (!isSunken) { // In this situation we have no winner because none of the ships have sunk => we have a stalemate.
        let pirateShipSum = 0;
        let warShipSum = 0;

        for (let element of pirateShip) {
            pirateShipSum += element;
        }

        for (let el of warShip) {
            warShipSum += el;
        }

        console.log(`Pirate ship status: ${pirateShipSum}`);
        console.log(`Warship status: ${warShipSum}`);
    }

    // let pirateShipSum = 0;
    // let warShipSum = 0;

    // for (let element of pirateShip) {
    //     pirateShipSum += element;
    // }

    // for (let el of warShip) {
    //     warShipSum += el;
    // }

    // console.log(`Pirate ship status: ${pirateShipSum}`);
    // console.log(`Warship status: ${warShipSum}`);
}

// manOWar(["12>13>11>20>66", "12>22>33>44>55>32>18", "70", "Fire 2 11", "Fire 8 100", "Defend 3 6 11", "Defend 0 3 5", "Repair 1 33", "Status", "Retire"]);
manOWar(["2>3>4>5>2", "6>7>8>9>10>11", "20", "Status", "Fire 2 3", "Defend 0 4 11", "Repair 3 18", "Retire"]);