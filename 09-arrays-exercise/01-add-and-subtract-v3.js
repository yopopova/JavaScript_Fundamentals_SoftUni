function addAndSubtract(input) {
    let arrOfNumbers = input;
    let modifyNumbersArr = [];
    let firstArrSum = 0;
    let secondArrSum = 0;
    let arrL = arrOfNumbers.length;

    for (let i = 0; i < arrL; i++) {
        let currentNumber = arrOfNumbers[i];
        firstArrSum += currentNumber;
        let newNumber = 0;

        if (currentNumber % 2 === 0) {
            newNumber = currentNumber + i;
        } else {
            newNumber = currentNumber - i;
        }

        modifyNumbersArr.push(newNumber);
        secondArrSum += newNumber;
    }

    console.log(modifyNumbersArr);
    console.log(firstArrSum);
    console.log(secondArrSum);
}