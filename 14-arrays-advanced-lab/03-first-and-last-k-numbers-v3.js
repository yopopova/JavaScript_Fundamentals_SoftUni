function firstAndLastKNumbers(input) {
    let num = input[0];
    let inputL = input.length;

    let forwardArr = input.slice(1, num + 1);
    let backwardArr = input.slice(inputL - num);

    console.log(forwardArr.join(' '));
    console.log(backwardArr.join(' '));
}