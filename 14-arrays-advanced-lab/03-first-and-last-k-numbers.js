function firstAndLastKNumbers(input) {
    let num = input.shift();
    let inputL = input.length;

    let forwardArr = [];

    for (let i = 0; i < num; i++) {
        forwardArr.push(input[i]);
    }

    let backwardArr = [];

    for (let i = inputL - num; i < inputL; i++) {
        backwardArr.push(input[i]);
    }

    console.log(forwardArr.join(' '));
    console.log(backwardArr.join(' '));
}

firstAndLastKNumbers([2, 7, 8, 9]);
// firstAndLastKNumbers([3, 6, 7, 8, 9]);