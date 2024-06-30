function maxNumber(arr) {
    let topIntegers = [];
    let arrL = arr.length;

    for (let i = 0; i < arrL; i++) {
        let currentNum = arr[i];
        let isTop = true; // Here we assume the number is prime.

        for (let j = i + 1; j < arrL; j++) { // We start at j = i + 1 because we are rotating from the next symbol on.
            let nextNum = arr[j];
            
            if (currentNum <= nextNum) {
                isTop = false; // Here the number is no longer top.
                break;
            }
        }

        if (isTop) {
            topIntegers.push(arr[i]);
        }
    }

    console.log(topIntegers.join(' '));
}

maxNumber([1, 4, 3, 2]);
maxNumber([14, 24, 3, 19, 15, 17]);
maxNumber([41, 41, 34, 20]);
maxNumber([27, 19, 42, 2, 13, 45, 48]);