function memoryGame(input) {
    let sequence = input.shift().split(' ');
    let movesCounter = 0;
    let command = input.shift();

    while (true) {

        if (command === 'end') {
            break;
        }

        let [indexOne, indexTwo] = command.split(' ');
        movesCounter++;

        if (indexOne === indexTwo || indexOne < 0 || indexOne >= sequence.length || indexTwo < 0 || indexTwo >= sequence.length) {

            sequence.splice(sequence.length / 2, 0, `-${movesCounter}a`, `-${movesCounter}a`);
            console.log('Invalid input! Adding additional elements to the board');

        } else {
            let elementOne = sequence[indexOne];
            let elementTwo = sequence[indexTwo];

            if (elementOne === elementTwo) {
                console.log(`Congrats! You have found matching elements - ${elementOne}!`);

                if (indexTwo > indexOne) {
                    sequence.splice(indexTwo, 1);
                    sequence.splice(indexOne, 1);
                } else {
                    sequence.splice(indexOne, 1);
                    sequence.splice(indexTwo, 1);
                }

                if (sequence.length === 0 || sequence.length === 1) {
                    console.log(`You have won in ${movesCounter} turns!`);
                    return;
                }

            } else {
                console.log('Try again!');
            }
        }

        command = input.shift();
    }

    console.log('Sorry you lose :(');
    console.log(`${sequence.join(' ')}`);
}