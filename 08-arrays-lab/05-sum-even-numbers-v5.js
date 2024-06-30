function sumEvenNumbers(arr) {
    let sum = 0;

    arr.map(x => {
        x = Number(x);

        if (x % 2 === 0) {
            sum += x;
        }
    });

    console.log(sum);
}

sumEvenNumbers(['1', '2', '3', '4', '5', '6']);
sumEvenNumbers(['3', '5', '7', '9']);
sumEvenNumbers(['2', '4', '6', '8', '10']);