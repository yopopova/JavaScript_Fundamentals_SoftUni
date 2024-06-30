function printResult(fNum, sNum, tNum) {

    function sumOfTwoNumbers(firstNum, secondNum) { // Nested function.
        return firstNum + secondNum;
    }

    let sum = sumOfTwoNumbers(fNum, sNum); // The variable keeps the result of 'sumOfTwoNumbers()' function.

    function subtract(sum, lastNumber) { // Nested function.
        return sum - lastNumber;
    }

    let finalResult = subtract(sum, tNum);

    console.log(finalResult);
}

printResult(23, 6, 10);