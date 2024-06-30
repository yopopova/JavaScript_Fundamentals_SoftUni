function getMax(firstNum, secondNum) {
    return Math.max(firstNum, secondNum);
}

function multiply(maxNum, otherNum) {
    return maxNum * otherNum;
}

console.log(multiply(getMax(5, 10), 5));