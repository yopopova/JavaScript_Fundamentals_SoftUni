function arrayModifier(input) {
    let arrIntegers = input.shift().split(' ').map(Number);

    let index = 0;
    let command = input[index];
    index++;

    while (command !== 'end') {
        let mathAction = command;

        let actionsArray = mathAction.split(' ');
        let action = actionsArray[0];
        let firstIndex = Number(actionsArray[1]);
        let secondIndex = Number(actionsArray[2]);

        if (action === 'swap') {
            let firstElement = arrIntegers[firstIndex];
            let secondElement = arrIntegers[secondIndex];

            arrIntegers[firstIndex] = secondElement;
            arrIntegers[secondIndex] = firstElement;

        } else if (action === 'multiply') {
            let multiplication = arrIntegers[firstIndex] * arrIntegers[secondIndex];
            arrIntegers[firstIndex] = multiplication;

        } else if (action === 'decrease') {
            let result = arrIntegers.map(x => x - 1);
            // ^ It is important to save the .map() operation in a new variable to execute.
            arrIntegers = result;
        }

        command = input[index];
        index++;
    }

    if (command === 'end') {
        console.log(arrIntegers.join(', '));
    }
}

arrayModifier(['23 -2 321 87 42 90 -123', 'swap 1 3', 'swap 3 6', 'swap 1 0', 'multiply 1 2', 'multiply 2 1', 'decrease', 'end']);
arrayModifier(['1 2 3 4', 'swap 0 1', 'swap 1 2', 'swap 2 3', 'multiply 1 2', 'decrease', 'end']);