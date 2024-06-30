function firstAndLastKNumbers(input) {
    let num = input.shift();
    let inputL = input.length;

    let forwardArr = input.slice(0, num);
    let backwardArr = input.slice(inputL - num); // It will just make it the length of the array.
    // ^ Or we can just write input.slice(-num); and it will start from the end of the array.

    console.log(forwardArr.join(' '));
    console.log(backwardArr.join(' '));
}

firstAndLastKNumbers([2, 7, 8, 9]);
firstAndLastKNumbers([3, 6, 7, 8, 9]);