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