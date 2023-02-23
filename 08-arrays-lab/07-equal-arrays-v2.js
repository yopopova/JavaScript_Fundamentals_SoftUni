function equalArrays(arrOne, arrTwo) {
    let arrOneL = arrOne.length;
    let areIdentical = true;

    for (let i = 0; i < arrOneL; i++) {
        if (arrOne[i] !== arrTwo[i]) {
            areIdentical = false;
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            break;
        }
    }

    let sum = 0;

    if (areIdentical) {
        for (let element of arrOne) {
            sum += Number(element);
        }

        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}