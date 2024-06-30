function calculator(fNum, oper, sNum) {
    let firstNum = Number(fNum);
    let operator = oper.toString();
    let secondNum = Number(sNum);
    let result = 0;

    if (operator === '*') {
        result = firstNum * secondNum;
    } else if (operator === '/') {
        result = firstNum / secondNum;
    } else if (operator === '+') {
        result = firstNum + secondNum;
    } else if (operator === '-') {
        result = Math.abs(firstNum - secondNum);
    }

    console.log(result.toFixed(2));
}

calculator(5, '+', 10);
calculator(25.5, '-', 3);