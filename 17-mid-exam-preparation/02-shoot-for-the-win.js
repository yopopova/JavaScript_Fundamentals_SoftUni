function shootForTheWin(input) {
    let targets = input.shift().split(' ').map(x => Number(x));
    input.pop(); // In JS we can just remove the end command (in this case 'End') and resolve without it. In other languages, however, we cannot do so.
    let shots = input.map(x => Number(x));
    let numberOfShots = 0;

    for (let i = 0; i < shots.length; i++) { // i < shots.length holds the upper bound of the array and makes sure we don't go beyond it*.

        // ^ *If we get an index that is greater than the length of the array, the variable currentShot = undefined,
        // accordingly the condition if (currentTarget > -1), will not be executed.

        let currentShot = shots[i];
        let currentTarget = targets[currentShot];
        // ^ We get the target value here because we'll need it later to add/subtract it from the other numbers in the array.

        if (currentTarget > -1) { // This condition holds the lower bound of the array and makes sure we don't go beyond it.
            targets[currentShot] = -1;
            numberOfShots++;

            for (let j = 0; j < targets.length; j++) {
                if (targets[j] > -1) { // Check if the target is shot.
                    if (targets[j] > currentTarget) {
                        targets[j] -= currentTarget;
                    } else {
                        targets[j] += currentTarget;
                    }
                }
            }
        }
    }

    console.log(`Shot targets: ${numberOfShots} -> ${targets.join(' ')}`);
}

shootForTheWin((["24 50 36 70", "0", "4", "3", "1", "End"]));
shootForTheWin((["30 30 12 60 54 66", "5", "2", "4", "0", "End"]));