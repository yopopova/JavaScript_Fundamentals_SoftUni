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

    let diff = evenSum - oddSum; // By condition, we always subtract the odd amount from the even amount.
    console.log(diff);
}

evenAndOddSubtraction([1, 2, 3, 4, 5, 6]);
evenAndOddSubtraction([3, 5, 7, 9]);
evenAndOddSubtraction([2, 4, 6, 8, 10]);