function simpleCalculator(numOne, numTwo, operator) {
    let result = 0;

    switch (operator) {
        case 'add':
            result = add(numOne, numTwo);
            break;
        case 'subtract':
            result = subtract(numOne, numTwo);
            break;
        case 'multiply':
            result = multiply(numOne, numTwo);
            break;
        case 'divide':
            result = divide(numOne, numTwo);
            break;
    }

    console.log(result);

    function add(num1, num2) {
        return num1 + num2;
    }

    function subtract(num1, num2) {
        return num1 - num2;
    }

    function multiply(num1, num2) {
        return num1 * num2;
    }

    function divide(num1, num2) {
        return num1 / num2;
    }
}