function simpleCalculator(firstNum, secondNum, operator) {
    let add = (a, b) => a + b;
    let subtract = (a, b) => a - b;
    let multiply = (a, b) => a * b;
    let divide = (a, b) => a / b;

    switch (operator) {
        case 'add':
            return add(firstNum, secondNum);
        case 'subtract':
            return subtract(firstNum, secondNum);
        case 'multiply':
            return multiply(firstNum, secondNum);
        case 'divide':
            return divide(firstNum, secondNum);
    }
}