function equalArrays(arrOne, arrTwo) {
    let sum = 0;
    let areIdentical = true;

    for (let i in arrOne) {
        if (arrOne[i] !== arrTwo[i]) {
            areIdentical = false;
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            break;
        }
    }

    if (areIdentical) {
        arrOne.map(el => sum += Number(el));
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}