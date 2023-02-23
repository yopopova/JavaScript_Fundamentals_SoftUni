function equalArrays(arrOne, arrTwo) {
    let sum = 0;
    let areIdentical = true;

    arrOne.forEach((el, i) => {
        if (arrOne[i] !== arrTwo[i]) {
            areIdentical = false;
            console.log(`Arrays are not identical. Found difference at ${i} index`);
        }
    });

    if (areIdentical) {
        arrOne.map(el => sum += Number(el));
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}