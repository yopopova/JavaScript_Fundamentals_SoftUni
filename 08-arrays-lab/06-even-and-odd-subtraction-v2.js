function evenAndOddSubtraction(arr) {
    let arrOfNums = arr.slice().map(el => el = Number(el));
    let evenSum = 0;
    let oddSum = 0;

    arrOfNums
    .filter(evenNum => evenNum % 2 === 0)
    .map(num => evenSum += num);

    arrOfNums
    .filter(oddNum => oddNum % 2 === 1)
    .map(num => oddSum += num);

    console.log(evenSum - oddSum); // By condition, we always subtract the odd amount from the even amount.
}

evenAndOddSubtraction([1, 2, 3, 4, 5, 6]);
evenAndOddSubtraction([3, 5, 7, 9]);
evenAndOddSubtraction([2, 4, 6, 8, 10]);