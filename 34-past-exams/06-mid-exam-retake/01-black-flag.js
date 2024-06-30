function blackFlag(input) {
    let days = Number(input[0]);
    let plunderPerDay = Number(input[1]);
    let expectedPlunder = Number(input[2]);

    let daysCounter = 0;
    let totalPlunder = 0;

    for (let i = 0; i < days; i++) {
        daysCounter++;
        totalPlunder += plunderPerDay;

        if (daysCounter % 3 === 0) {
            totalPlunder += plunderPerDay / 2;
        }

        if (daysCounter % 5 === 0) {
            totalPlunder -= totalPlunder * 0.3;
        }
    }

    if (totalPlunder < expectedPlunder) {
        let diff = (totalPlunder / expectedPlunder) * 100;
        console.log(`Collected only ${diff.toFixed(2)}% of the plunder.`);
    } else {
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
    }
}

blackFlag(["5", "40", "100"]);
blackFlag(["10", "20", "380"]);