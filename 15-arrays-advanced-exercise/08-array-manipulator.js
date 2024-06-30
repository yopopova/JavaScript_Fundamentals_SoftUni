function arrayManipulator(numbers, commands) {
    for (let command of commands) {
        let tokens = command.split(' ');
        let currentCommand = tokens[0];

        if (currentCommand === 'add') {
            let index = Number(tokens[1]);
            let element = Number(tokens[2]); // Instead of Number(), we can just add a + in front of tokens[2].
            numbers.splice(index, 0, element);

        } else if (currentCommand === 'addMany') {
            let index = Number(tokens[1]);
            tokens.splice(0, 2);
            let numbersToAdd = tokens.map(Number);
            numbers.splice(index, 0, ...numbersToAdd); // We put ... so they come out as elements, not an array.

        } else if (currentCommand === 'contains') {
            let result = numbers.indexOf(+tokens[1]); // + is instead of Number()
            console.log(result);

        } else if (currentCommand === 'remove') {
            let index = Number(tokens[1]);
            numbers.splice(index, 1);

        } else if (currentCommand === 'shift') {
            let position = tokens[1];

            for (let i = 0; i < position; i++) {
                let firstNumber = numbers.shift();
                numbers.push(firstNumber);
            }

        } else if (currentCommand === 'sumPairs') {
            let resultArr = [];

            if (numbers.length % 2 !== 0) {
                numbers.push(0);
                // ^ If the length of the array is odd, we add 0 to the array so we have something to add to
                // the last remaining element of the array and at the same time get its value.
            }

            for (let i = 0; i < numbers.length - 1; i += 2) { // -1 because we have to loop to the penultimate element because there is no way to collect the last one.
                let sum = numbers[i] + numbers[i + 1];
                resultArr.push(sum);
            }

            numbers = resultArr;

        } else if (currentCommand === 'print') {
            console.log(`[ ${numbers.join(', ')} ]`);
        }
    }
}

arrayManipulator([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print']);
arrayManipulator([1, 2, 3, 4, 5], ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);