function sumEvenNumbers(arr) {
    let arrL = arr.length;
    let sum = 0;

    for (let i = 0; i < arrL; i++) {
        let currentNum = Number(arr[i]);

        if (currentNum % 2 === 0) {
            sum += currentNum;
        }
    }

    console.log(sum);
}