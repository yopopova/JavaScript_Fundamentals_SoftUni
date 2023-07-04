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
            arrIntegers = result;
        }

        command = input[index];
        index++;
    }

    if (command === 'end') {
        console.log(arrIntegers.join(', '));
    }
}