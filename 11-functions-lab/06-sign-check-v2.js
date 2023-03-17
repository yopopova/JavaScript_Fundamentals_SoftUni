function signCheck(numOne, numTwo, numThree) {
    let totalNegative = 0;

    if (isNegative(numOne)) {
        totalNegative++;
    }

    if (isNegative(numTwo)) {
        totalNegative++;
    }

    if (isNegative(numThree)) {
        totalNegative++;
    }

    if (totalNegative % 2 === 0) {
        console.log('Positive');
    } else {
        console.log('Negative');
    }

    function isNegative(number) {
        return number < 0;
    }
}