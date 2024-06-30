function signCheck(numOne, numTwo, numThree) {
    let result = '';

    // The Even-Odd Rule:
    // If we have an odd number of negative numbers, the result is negative.
    // If we have an even number of negative numbers, the result is positive.

    if (numOne >= 0 && numTwo >= 0 && numThree >= 0) {
        result = 'Positive';
    } else if (numOne < 0 && numTwo < 0 && numThree < 0) {
        result = 'Negative';
    } else if (numOne < 0 && numTwo > 0 && numThree > 0) {
        result = 'Negative';
    } else if (numOne > 0 && numTwo < 0 && numThree > 0) {
        result = 'Negative';
    } else if (numOne > 0 && numTwo > 0 && numThree < 0) {
        result = 'Negative';
    } else if (numOne > 0 && numTwo < 0 && numThree < 0) {
        result = 'Positive';
    } else if (numOne < 0 && numTwo > 0 && numThree < 0) {
        result = 'Positive';
    } else if (numOne < 0 && numTwo < 0 && numThree > 0) {
        result = 'Positive';
    }

    return result;
}

let result = signCheck(5, 12, -15);
console.log(result);