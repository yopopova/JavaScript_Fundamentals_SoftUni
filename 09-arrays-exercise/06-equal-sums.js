function equalSums(arr) {
    let isEqual = false;
    let arrL = arr.length;

    for (let i = 0; i < arrL; i++) {
        let leftSum = 0;
        let rightSum = 0;

        for (let r = i + 1; r < arrL; r++) {
            let rightElement = arr[r];
            rightSum += rightElement;
        }

        for (let l = 0; l < i; l++) {
            let leftElement = arr[l];
            leftSum += leftElement;
        }

        if (leftSum === rightSum) {
            isEqual = true;
            console.log(i);
        }
    }

    if (!isEqual) {
        console.log('no');
    }
}