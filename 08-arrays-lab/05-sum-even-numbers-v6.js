function sumEvenNumbers(arr) {
    let sum = 0;

    arr
    .map(el => el = Number(el))
    .filter(evenNum => evenNum % 2 === 0)
    .forEach(num => sum += num);

    console.log(sum);
}