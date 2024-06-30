function firstAndLastKNumbers(input) { // Solution without modifying the original array ie. without removing elements.
    let num = input[0];
    let inputL = input.length;

    let forwardArr = input.slice(1, num + 1);
    let backwardArr = input.slice(inputL - num); // It will only make it the length of the array, so we only pass 1 value.

    console.log(forwardArr.join(' '));
    console.log(backwardArr.join(' '));
}

firstAndLastKNumbers([2, 7, 8, 9]);
firstAndLastKNumbers([3, 6, 7, 8, 9]);