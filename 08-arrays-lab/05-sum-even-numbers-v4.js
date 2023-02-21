function sumEvenNumbers(arr) {
    let sum = 0;

    arr.forEach(x => {
        x = Number(x);

        if (x % 2 === 0) {
            sum += x;
        }
    });

    console.log(sum);
}