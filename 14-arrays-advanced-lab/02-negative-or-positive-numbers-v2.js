function negativeOrPositiveNumbers(input) {
    let newArr = [];

    for (let num of input) {
        num < 0 ? newArr.unshift(num) : newArr.push(num);
    }

    console.log(newArr.join('\n'));
}

negativeOrPositiveNumbers([7, -2, 8, 9]);
// negativeOrPositiveNumbers([3, -2, 0, -1]);