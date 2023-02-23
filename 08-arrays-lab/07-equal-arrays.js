function equalArrays(firstArr, secondArr) {
    let areIdentical = true;
    let indexOfDiff = 0;
    let firstArrL = firstArr.length;

    for (let index = 0; index < firstArrL; index++) {
        let firstEl = firstArr[index];
        let secondEl = secondArr[index];

        if (firstEl !== secondEl) {
            areIdentical = false;
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