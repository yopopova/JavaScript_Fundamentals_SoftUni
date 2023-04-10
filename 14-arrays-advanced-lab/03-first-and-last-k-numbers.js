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