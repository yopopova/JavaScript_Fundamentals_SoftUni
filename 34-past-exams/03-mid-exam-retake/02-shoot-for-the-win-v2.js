function shootForTheWin(input) {
    let targets = input.shift().split(' ').map(Number);
    let targetsL = targets.length;
    let shotsCounter = 0;

    let index = 0;
    let command = input[index];
    index++;

    while (command !== "End") {
        let num = Number(command);

        if (num >= 0 && num < targetsL) {

            for (let i = 0; i < targetsL; i++) {
                let currentIndex = targets[num];

                if (targets[i] !== -1 && i !== num) {

                    if (targets[i] > currentIndex) {
                        targets[i] -= currentIndex;
                    } else {
                        targets[i] += currentIndex;
                    }
                }
            }

            targets[num] = -1;
            shotsCounter++;
        }

        command = input[index];
        index++;
    }

    if (command === "End") {
        console.log(`Shot targets: ${shotsCounter} -> ${targets.join(' ')}`);
    }
}