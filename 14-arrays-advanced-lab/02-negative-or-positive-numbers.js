function negativeOrPositiveNumbers(input) {
    let newArr = [];

    for (let num of input) {
        if (num < 0) {
            newArr.unshift(num);
        } else {
            newArr.push(num);
        }
    }

    for (let element of newArr) {
        console.log(element);
    }
}

negativeOrPositiveNumbers([7, -2, 8, 9]);
// negativeOrPositiveNumbers([3, -2, 0, -1]);