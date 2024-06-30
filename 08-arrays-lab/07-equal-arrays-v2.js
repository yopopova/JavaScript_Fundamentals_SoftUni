function equalArrays(arrOne, arrTwo) { // Assume both arrays are the same length.
    let arrOneL = arrOne.length;
    // ^ When we walk the length of one array, we also walk the length of the other,
    // so we only use one loop to loop through them.

    let areIdentical = true; // Boolean flag to assume that the two arrays are identical to begin with.

    for (let i = 0; i < arrOneL; i++) {
        if (arrOne[i] !== arrTwo[i]) {
            areIdentical = false; // If we entered this condition, then the two arrays are not the same.
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            break;
        }
    }

    let sum = 0;

    if (areIdentical) {
        // ^ We don't need to write areIdentical === true here, because the condition inside the parentheses of the if construct itself returns true.
        for (let element of arrOne) {
            sum += Number(element);
        }

        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}

equalArrays(['10', '20', '30'], ['10', '20', '30']);
equalArrays(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5']);
equalArrays(['1'], ['10']);