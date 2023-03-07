function maxNumber(arr) {
    let topIntegers = [];
    let arrL = arr.length;

    for (let i = 0; i < arrL; i++) {
        let currentNum = arr[i];
        let isTop = true;

        for (let j = i + 1; j < arrL; j++) {
            let nextNum = arr[j];
            
            if (currentNum <= nextNum) {
                isTop = false;
                break;
            }
        }

        if (isTop) {
            topIntegers.push(arr[i]);
        }
    }

    console.log(topIntegers.join(' '));
}