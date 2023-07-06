function shootForTheWin(input) {
    let targets = input.shift().split(' ').map(Number);
    let indice = input.shift();
    let shotTargetsCount = 0;

    while (true) {

        if (indice === "End") {
            break;
        }

        let index = Number(indice);

        if (index >= 0 && index < targets.length) {

            for (let i = 0; i < targets.length; i++) {
                let currentTarget = Number(targets[index]);

                if (i !== index && targets[i] !== -1) {

                    if (targets[i] > currentTarget) {
                        targets[i] -= currentTarget;
                    } else {
                        targets[i] += currentTarget;
                    }
                }
            }

            targets[index] = -1;
            shotTargetsCount++;
        }

        indice = input.shift();
    }

    console.log(`Shot targets: ${shotTargetsCount} -> ${targets.join(' ')}`);
}