function counterStrike(input) {
    let index = 0;
    let energy = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    let wonBattles = 0;

    while (command !== "End of battle") {
        let distance = Number(command);

        if (energy < distance) {
            console.log(`Not enough energy! Game ends with ${wonBattles} won battles and ${energy} energy`);
            break;
        }

        energy -= distance;
        wonBattles++;

        if (wonBattles % 3 === 0) {
            energy += wonBattles;
        }

        command = input[index];
        index++;
    }

    if (command === "End of battle") {
        console.log(`Won battles: ${wonBattles}. Energy left: ${energy}`);
    }
}

counterStrike(["100", "10", "10", "10", "1", "2", "3", "73", "10"]);
counterStrike(["200", "54", "14", "28", "13", "End of battle"]);