function movingTarget(input) {
    let targets = input.shift().split(' ').map(x => Number(x));
    input.pop();

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
            let startIndex = index - num;
            let endIndex = index + num;

            if (startIndex >= 0 && endIndex < targets[targets.length - 1]) {
                let elementsToRemove = num * 2 + 1;
                targets.splice(startIndex, elementsToRemove);

            } else {
                console.log("Strike missed!");
            }
        }
    }

    console.log(targets.join('|'));
}