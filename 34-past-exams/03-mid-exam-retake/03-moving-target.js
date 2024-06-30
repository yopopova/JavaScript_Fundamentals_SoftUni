function movingTarget(input) {
    let targets = input.shift().split(' ').map(x => Number(x));
    input.pop(); // We remove the "End" command.

    for (let i = 0; i < input.length; i++) {
        let [command, index, num] = input[i].split(' ');
        index = Number(index);
        num = Number(num);

        if (command === 'Shoot') {
            if (index >= 0 && index < targets.length) {
                targets[index] -= num;

                if (targets[index] <= 0) {
                    targets.splice(index, 1);
                }
            }

        } else if (command === 'Add') {
            if (index >= 0 && index < targets.length) {
                targets.splice(index, 0, num);
            } else {
                console.log('Invalid placement!');
            }

        } else if (command === 'Strike') {
            let startIndex = index - num; // Starting index from which we can start removing elements.
            let endIndex = index + num; // End index to which we can remove elements.

            if (startIndex >= 0 && endIndex < targets[targets.length - 1]) {
                let elementsToRemove = num * 2 + 1;
                // ^ Multiply the radius * 2 because we'll be removing elements from both sides and finally add 1 to the number itself.

                targets.splice(startIndex, elementsToRemove);
                // ^ We tell it at which index to start (startIndex) and how many elements to remove (elementsToRemove).

            } else {
                console.log("Strike missed!");
            }
        }
    }

    console.log(targets.join('|'));
}

movingTarget(["52 74 23 44 96 110", "Shoot 5 10", "Shoot 1 80", "Strike 2 1", "Add 22 3", "End"]);
movingTarget(["1 2 3 4 5", "Strike 0 1", "End"]);