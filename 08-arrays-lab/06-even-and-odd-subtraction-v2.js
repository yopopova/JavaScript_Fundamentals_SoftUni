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

    console.log(evenSum - oddSum);
}