function theHuntingGames(input) {
    let adventureDays = Number(input.shift());
    let players = Number(input.shift());
    let energy = Number(input.shift());
    let waterForPerson = Number(input.shift());
    let foodForPerson = Number(input.shift());
    let inputL = input.length;
    let daysCounter = 0;

    let allWater = (players * waterForPerson) * adventureDays;
    let allFood = (players * foodForPerson) * adventureDays;

    for (let i = 0; i < inputL; i++) {
        let lostEnergyPerDay = Number(input[i]);

        energy -= lostEnergyPerDay;
        daysCounter++;

        if (energy <= 0) {
            break;
        }

        if (daysCounter % 2 === 0) {
            energy += energy * 0.05;
            allWater -= allWater * 0.3;
        }

        if (daysCounter % 3 === 0) {
            allFood -= allFood / players;
            energy += energy * 0.1;
        }
    }

    if (energy > 0) {
        console.log(`You are ready for the quest. You will be left with - ${energy.toFixed(2)} energy!`);
    } else {
        console.log(`You will run out of energy. You will be left with ${allFood.toFixed(2)} food and ${allWater.toFixed(2)} water.`);
    }
}

theHuntingGames(["10", "7", "5035.5", "11.3", "7.2", "942.3", "500.57", "520.68", "540.87", "505.99", "630.3", "784.20", "321.21", "456.8", "330"]);
theHuntingGames(["12", "6", "4430", "9.8", "5.5", "620.3", "840.2", "960.1", "220", "340", "674", "365", "345.5", "212", "412.12", "258", "496"]);