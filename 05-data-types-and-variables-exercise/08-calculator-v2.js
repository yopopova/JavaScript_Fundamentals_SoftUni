function calculator(fNum, oper, sNum) {
    let firstNum = Number(fNum);
    let operator = oper.toString();
    let secondNum = Number(sNum);
    let result = 0;

    switch (operator) {
        case '+': result = firstNum + secondNum; break;
        case '-': result = Math.abs(firstNum - secondNum); break;
        case '*': result = firstNum * secondNum; break;
        case '/': result = firstNum / secondNum; break;
    }

    console.log(result.toFixed(2));
}

calculator(5, '+', 10);
calculator(25.5, '-', 3);