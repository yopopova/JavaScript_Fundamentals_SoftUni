function evenAndOddSubtraction(arr) {
    let evenSum = 0;
    let oddSum = 0;

    for (let current of arr) {
        if (current % 2 === 0) {
            evenSum += current;
        } else {
            oddSum += current;
        }
    }

    let diff = evenSum - oddSum;
    console.log(diff);
}