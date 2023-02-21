function sumEvenNumbers(arr) {
    let sum = 0;

    for (let element of arr) {
        let number = Number(element);

        if (number % 2 === 0) {
            sum += number;
        }
    }

    console.log(sum);
}