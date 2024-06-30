function arrayManipulations(input) {
    let arr = input.shift().split(' ').map(Number);
    let inputL = input.length;

    for (let i = 0; i < inputL; i++) {
        let [command, firstEl, secondEl] = input[i].split(' ');

        firstEl = Number(firstEl);
        secondEl = Number(secondEl);

        if (command === 'Add') {
            arr.push(firstEl);

        } else if (command === 'Remove') {
            if (arr.includes(firstEl)) {
                let index = arr.indexOf(firstEl);
                arr.splice(index, 1);
            }

        } else if (command === 'RemoveAt') {
            arr.splice(firstEl, 1);

        } else if (command === 'Insert') {
            arr.splice(secondEl, 0, firstEl);
        }
    }

    console.log(arr.join(' '));
}

arrayManipulations(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3']);
arrayManipulations(['6 12 2 65 6 42', 'Add 8', 'Remove 12', 'RemoveAt 3', 'Insert 6 2']);