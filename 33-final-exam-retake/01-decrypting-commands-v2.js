function decryptingCommands(input) {
    let message = input.shift();
    let finishCommand = input.pop();
    let inputL = input.length;

    for (let i = 0; i < inputL; i++) {
        let [command, elOne, elTwo] = input[i].split(' ');

        if (command === 'Replace') {
            let currChar = elOne;
            let newChar = elTwo;

            message = message.split(currChar);
            message = message.join(newChar);
            console.log(message);

        } else if (command === 'Cut') {
            let indexStart = Number(elOne);
            let indexEnd = Number(elTwo);

            if (indexStart >= 0 && indexStart < message.length && indexEnd >= 0 && indexEnd < message.length) {
                let removedSubstr = message.substr(indexStart + 1, indexEnd);

                let newMessage = message.split(removedSubstr).join('');
                message = newMessage;
                console.log(newMessage);

            } else {
                console.log(`Invalid indices!`);
            }

        } else if (command === 'Make') {
            let com = elOne;

            if (com === 'Upper') {
                message = message.toUpperCase();
            } else if (com === 'Lower') {
                message = message.toLowerCase();
            }
            console.log(message);

        } else if (command === 'Check') {
            let str = elOne;

            if (message.includes(str)) {
                console.log(`Message contains ${str}`);
            } else {
                console.log(`Message doesn't contain ${str}`);
            }

        } else if (command === 'Sum') {
            let startIndex = Number(elOne);
            let endIndex = Number(elTwo);

            if (startIndex >= 0 && startIndex < message.length && endIndex >= 0 && endIndex < message.length) {
                let subStr = message.substring(startIndex, endIndex + 1);
                subStr = subStr.split('');
                let sum = 0;

                for (let symbol of subStr) {
                    let letter = symbol.charCodeAt();
                    sum += letter;
                }
                console.log(sum);

            } else {
                console.log(`Invalid indices!`);
            }
        }
    }
}