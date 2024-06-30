function sumOfOddNumbers(n) {
    let counter = 0;
    let sum = 0;

    for (let i = 1; i <= 100; i++) {
        if (i % 2 !== 0) {
            if (counter === n) {
                console.log(`Sum: ${sum}`);
                break;
            } else {
                console.log(i);
            }

            counter++;
            sum += i;
        }
    }
}

sumOfOddNumbers(5);
sumOfOddNumbers(3);