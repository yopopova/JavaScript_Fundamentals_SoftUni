function sumDigits(input) {
    let numberAsString = input.toString();
    let sumOfDigits = 0;
    let stringL = numberAsString.length;

    for (let i = 0; i < stringL; i++) {
        let currentNumber = Number(numberAsString[i]);
        sumOfDigits += currentNumber;
    }

    console.log(sumOfDigits);
}