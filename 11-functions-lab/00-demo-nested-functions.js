function multiply(firstNum, secondNum, thirdNum) {
    let max = getMax(firstNum, secondNum);

    return max * thirdNum;

    function getMax(numOne, numTwo) {
        return Math.max(numOne, numTwo);
    }
}

console.log(multiply(1, 2, 3));
// getMax(3, 4);