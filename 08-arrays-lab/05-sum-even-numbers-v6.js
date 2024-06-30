function sumEvenNumbers(arr) {
    let sum = 0;

    arr
    .map(el => el = Number(el)) // We cannot use .forEach(), because it isn't chainable and will return 'undefined'. We can't use filter() on 'undefined'.
    .filter(evenNum => evenNum % 2 === 0)
    .forEach(num => sum += num);

    console.log(sum);
}

sumEvenNumbers(['1', '2', '3', '4', '5', '6']);
sumEvenNumbers(['3', '5', '7', '9']);
sumEvenNumbers(['2', '4', '6', '8', '10']);