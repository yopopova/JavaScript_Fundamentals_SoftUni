function smallestOfThreeNumbers(x, y, z) {
    let smallestNumber = Number.MAX_SAFE_INTEGER;

    for (let n of arguments) {
        getSmaller(n);
    }

    function getSmaller(num) {
        if (num < smallestNumber) {
            smallestNumber = num;
        }
    }

    return smallestNumber;
}