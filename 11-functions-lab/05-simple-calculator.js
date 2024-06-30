function simpleCalculator(firstNum, secondNum, operator) {
    let add = (a, b) => a + b;
    let subtract = (a, b) => a - b;
    let multiply = (a, b) => a * b;
    let divide = (a, b) => a / b;

    // Arrow function that is declared with a variable must be defined at the beginning of the code because it is not handled a.k.a. functions declared with a variable are not called.
    // When we define a function with a variable, we tell the code to create the function at the time we create the variable.

    switch (operator) {
        case 'add':
            return add(firstNum, secondNum); // We don't need 'break', because we have 'return'.
        case 'subtract':
            return subtract(firstNum, secondNum);
        case 'multiply':
            return multiply(firstNum, secondNum);
        case 'divide':
            return divide(firstNum, secondNum);
    }
}

console.log(simpleCalculator(5, 5, 'multiply'));
console.log(simpleCalculator(40, 8, 'divide'));
console.log(simpleCalculator(12, 19, 'add'));
console.log(simpleCalculator(50, 13, 'subtract'));