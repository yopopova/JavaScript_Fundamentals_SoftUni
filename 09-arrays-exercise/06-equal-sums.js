function equalSums(arr) {
    let isEqual = false;
    let arrL = arr.length;

    for (let i = 0; i < arrL; i++) {
        let leftSum = 0;
        let rightSum = 0;

        for (let r = i + 1; r < arrL; r++) { // right sum
            let rightElement = arr[r];
            rightSum += rightElement;
        }

        for (let l = 0; l < i; l++) { // left sum
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

equalSums([1, 2, 3, 3]);
// equalSums([1, 2]);
// equalSums([1]);
// equalSums([1, 2, 3]);
// equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);