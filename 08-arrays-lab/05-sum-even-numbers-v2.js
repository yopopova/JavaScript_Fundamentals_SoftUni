function sumEvenNumbers(arr) {
    let arrL = arr.length;
    let sum = 0;

    for (let i = 0; i < arrL; i++) {
        arr[i] = Number(arr[i]);
    }

    for (let current of arr) {
        if (current % 2 === 0) {
            sum += current;
        }
    }

    console.log(sum);
}