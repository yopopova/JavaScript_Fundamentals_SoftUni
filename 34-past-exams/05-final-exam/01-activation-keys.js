function activationKeys(input) {
    let activationKey = input.shift();
    let generateCommand = input.pop();
    let inputL = input.length;

    for (let i = 0; i < inputL; i++) {
        let [command, elOne, elTwo, elThree] = input[i].split('>>>');

        if (command === 'Contains') {
            let givenStr = elOne;

            if (activationKey.includes(givenStr)) {
                console.log(`${activationKey} contains ${givenStr}`);
            } else {
                console.log("Substring not found!");
            }

        } else if (command === 'Flip') {
            let action = elOne;
            let startIn = Number(elTwo);
            let endIn = Number(elThree);

            let startPart = activationKey.substring(0, startIn);
            let midPart = activationKey.substring(startIn, endIn);
            let lastPart = activationKey.substring(endIn);

            if (action === 'Upper') {
                midPart = midPart.toUpperCase();
            } else if (action === 'Lower') {
                midPart = midPart.toLowerCase();
            }

            let newKey = startPart.concat(midPart, lastPart);
            activationKey = newKey;
            console.log(activationKey);

        } else if (command === 'Slice') {
            let startIndex = Number(elOne);
            let endIndex = Number(elTwo);

            let firstPart = activationKey.substring(0, startIndex);
            let secondPart = activationKey.substring(endIndex);
            let newStr = firstPart.concat(secondPart);
            activationKey = newStr;
            console.log(activationKey);
        }
    }

    console.log(`Your activation key is: ${activationKey}`);
}

// activationKeys(["abcdefghijklmnopqrstuvwxyz", "Slice>>>2>>>6", "Flip>>>Upper>>>3>>>14", "Flip>>>Lower>>>5>>>7", "Contains>>>def", "Contains>>>deF", "Generate"]);
activationKeys(["134softsf5ftuni2020rockz42", "Slice>>>3>>>7", "Contains>>>-rock", "Contains>>>-uni-", "Contains>>>-rocks", "Flip>>>Upper>>>2>>>8", "Flip>>>Lower>>>5>>>11", "Generate"]);