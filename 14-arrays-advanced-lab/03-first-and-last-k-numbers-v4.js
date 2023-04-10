function firstAndLastKNumbers(input) {
    let num = input[0];

    let forwardArr = input.slice(1, num + 1);
    let backwardArr = input.slice(-num);

    console.log(forwardArr.join(' '));
    console.log(backwardArr.join(' '));
}