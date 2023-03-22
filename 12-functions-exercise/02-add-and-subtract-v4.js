function printResult(fNum, sNum, tNum) {

    function sumOfTwoNumbers(firstNum, secondNum) {
        return firstNum + secondNum;
    }

    let sum = sumOfTwoNumbers(fNum, sNum);

    function subtract(sum, lastNumber) {
        return sum - lastNumber;
    }

    let finalResult = subtract(sum, tNum);

    console.log(finalResult);
}