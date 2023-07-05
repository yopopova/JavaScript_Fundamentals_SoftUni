function secretChat(input) {
    let message = input.shift();
    let revealCommand = input.pop();
    let inputL = input.length;

    for (let i = 0; i < inputL; i++) {
        let [command, elOne, elTwo] = input[i].split(':|:');

        if (command === 'InsertSpace') {
            let spaceIndex = Number(elOne);

            let firstPart = message.substring(0, spaceIndex);
            let secondPart = message.substring(spaceIndex);

            message = firstPart.concat(' ', secondPart);
            console.log(message);

        } else if (command === 'Reverse') {
            let subString = elOne;

            if (message.includes(subString)) {
                let index = message.indexOf(subString);

                let partOne = message.substring(0, index);
                let partTwo = message.substring(index, index + subString.length).split('').reverse().join('');
                let partThree = message.substring(index + subString.length);

                message = partOne.concat(partThree, partTwo);
                console.log(message);
            } else {
                console.log("error");
            }

        } else if (command === 'ChangeAll') {
            let subStr = elOne;
            let replacement = elTwo;

            message = message.split(subStr).join(replacement);
            console.log(message);
        }
    }

    console.log(`You have a new text message: ${message}`);
}