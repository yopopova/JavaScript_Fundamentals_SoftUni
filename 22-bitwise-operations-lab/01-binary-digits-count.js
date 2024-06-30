function binaryDigitsCount(num, binaryNum) {
    let count = 0;

    while (num !== 0) {
        let leftOver = num % 2; // Store the remainders in the array and print it back to give us the binary code.

        if (leftOver === binaryNum) {
            count++;
        }

        num = Math.floor(num / 2);
    }

    console.log(count);
}