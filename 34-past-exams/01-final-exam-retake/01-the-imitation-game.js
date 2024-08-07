function theImitationGame(input) {
    let message = input.shift();
    let decodeCommand = input.pop();
    let inputL = input.length;

    for (let i = 0; i < inputL; i++) {
        let [command, elOne, elTwo] = input[i].split('|');

        if (command === 'Move') {
            let lettersCount = Number(elOne);

            let firstPart = message.substring(0, lettersCount);
            let secondPart = message.substring(lettersCount);
            message = secondPart.concat(firstPart);

        } else if (command === 'Insert') {
            let index = Number(elOne);
            let value = elTwo;

            let partOne = message.substring(0, index);
            let partTwo = message.substring(index);
            message = partOne.concat(value, partTwo);

        } else if (command === 'ChangeAll') {
            let subStr = elOne;
            let replacement = elTwo;

            message = message.split(subStr).join(replacement); // So we replace each character with the new one.
        }
    }

    console.log(`The decrypted message is: ${message}`);
}

// theImitationGame(['zzHe', 'ChangeAll|z|l', 'Insert|2|o', 'Move|3', 'Decode',]);
theImitationGame(['owyouh', 'Move|2', 'Move|3', 'Insert|3|are', 'Insert|9|?', 'Decode',]);