function binaryDigitsCount(num, binaryNum) {
    let count = 0;

    while (num !== 0) {
        let leftOver = num % 2;

        if (leftOver === binaryNum) {
            count++;
        }

        num = Math.floor(num / 2);
    }

    console.log(count);
}