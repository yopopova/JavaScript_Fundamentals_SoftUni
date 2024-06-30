function equalArrays(arrOne, arrTwo) { // Assume both arrays are the same length.
    let sum = 0;
    let areIdentical = true; // Boolean flag to assume that the two arrays are identical to begin with.

    for (let i in arrOne) {
        if (arrOne[i] !== arrTwo[i]) {
            areIdentical = false;
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            break;
            // ^ If we entered this condition, then the two arrays are not the same.
        }
    }

    if (areIdentical) {
        arrOne.map(el => sum += Number(el));
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}

equalArrays(['10', '20', '30'], ['10', '20', '30']);
equalArrays(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5']);
equalArrays(['1'], ['10']);