function firstAndLastKNumbers(input) { // Solution without modifying the original array.
    let num = input[0];

    let forwardArr = input.slice(1, num + 1);
    let backwardArr = input.slice(-num); // When we pass it a negative value, it automatically starts counting from the end to the beginning of the array.

    console.log(forwardArr.join(' '));
    console.log(backwardArr.join(' '));
}

firstAndLastKNumbers([2, 7, 8, 9]);
firstAndLastKNumbers([3, 6, 7, 8, 9]);