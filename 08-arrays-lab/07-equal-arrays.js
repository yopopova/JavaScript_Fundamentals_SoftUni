function equalArrays(firstArr, secondArr) {
    let areIdentical = true; // Boolean flag to assume the two arrays are identical.
    let indexOfDiff = 0;
    let firstArrL = firstArr.length;

    for (let index = 0; index < firstArrL; index++) {
        let firstEl = firstArr[index];
        let secondEl = secondArr[index];

        if (firstEl !== secondEl) {
            areIdentical = false; // Here the indices are no longer identical, so it is false.
            indexOfDiff = index;
            break;
        }
    }

    if (areIdentical) {
        let sum = 0;

        for (let index = 0; index < firstArrL; index++) {
            sum += Number(firstArr[index]);
        }

        console.log(`Arrays are identical. Sum: ${sum}`);
    } else {
        console.log(`Arrays are not identical. Found difference at ${indexOfDiff} index`);
    }
}

equalArrays(['10', '20', '30'], ['10', '20', '30']);
equalArrays(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5']);
equalArrays(['1'], ['10']);