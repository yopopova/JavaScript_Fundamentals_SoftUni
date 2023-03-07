function magicSum(arr, n) {
    let arrL = arr.length;

    for (let i = 0; i < arrL; i++) {
        let currentNum = arr[i];

        for (let j = i + 1; j < arrL; j++) {
            let nextNum = arr[j];
            let sum = currentNum + nextNum;

            if (sum === n) {
                console.log(`${currentNum} ${nextNum}`);
            }
        }
    }
}