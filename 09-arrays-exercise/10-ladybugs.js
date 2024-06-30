function ladybugs(arr) {
    let copyArr = arr.slice();
    let fieldSize = copyArr.shift();
    let ladybugPositions = copyArr.shift().split(' ');
    let finalPositions = new Array(fieldSize).fill(0);

    for (let position of ladybugPositions) {
        let currPosition = Number(position);

        if (currPosition < 0 || currPosition >= fieldSize) {
            continue;
        }

        finalPositions[currPosition] = 1;
    }

    for (let line of copyArr) {
        let [index, command, jumpLength] = line.split(' ');
        index = Number(index);
        jumpLength = Number(jumpLength);

        if (index < 0 || index >= finalPositions.length || finalPositions[index] !== 1) {
            continue;
        }

        finalPositions[index] = 0;

        if (command === 'left') {
            jumpLength = -jumpLength;
        }

        index += jumpLength;

        while (index >= 0 && index < finalPositions.length) {
            if (finalPositions[index] === 0) {
                finalPositions[index] = 1;
                break;
            }

            index += jumpLength;
        }
    }

    console.log(finalPositions.join(' '));
}

ladybugs([3, '0 1', '0 right 1', '2 right 1']);
ladybugs([3, '0 1 2', '0 right 1', '1 right 1', '2 right 1']);
ladybugs([5, '3', '3 left 2', '1 left -2']);