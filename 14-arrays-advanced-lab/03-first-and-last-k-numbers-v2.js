function firstAndLastKNumbers(input) {
    let num = input.shift();
    let inputL = input.length;

    let forwardArr = input.slice(0, num);
    let backwardArr = input.slice(inputL - num);

    console.log(forwardArr.join(' '));
    console.log(backwardArr.join(' '));
}