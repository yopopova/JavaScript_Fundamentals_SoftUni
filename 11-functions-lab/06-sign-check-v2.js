function signCheck(numOne, numTwo, numThree) {
    let totalNegative = 0;

    if (isNegative(numOne)) { // We check the first number.
        totalNegative++;
    }

    if (isNegative(numTwo)) { // We check the second number.
        totalNegative++;
    }

    if (isNegative(numThree)) { // We check the third number.
        totalNegative++;
    }

    if (totalNegative % 2 === 0) {
        console.log('Positive'); // We could use 'return' here.
    } else {
        console.log('Negative'); // We could use 'return' here.
    }

    // The function is looking ONLY for negative numbers.
    function isNegative(number) {
        return number < 0;
    }
}

signCheck(5, 12, -15);
signCheck(-6, -12, 14);
signCheck(-1, -2, -3);
signCheck(-5, 1, 1);

// + * + = + (Positive)
// - * - = + (Positive)
// - * + = - (Negative)

// If we have odd number (1, 3 etc.) of negative numbers, the result is 'Negative' number.
// If we have even number (2, 4 etc.) of negative numbers, the result is 'Positive' number.