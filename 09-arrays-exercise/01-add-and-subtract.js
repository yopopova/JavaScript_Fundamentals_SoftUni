function addAndSubtract(arr) {
    let firstSum = 0;

    for (const num of arr) {
        firstSum += num;
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            arr[i] += i;
        } else {
            arr[i] -= i;
        }
    }

    let secondSum = 0;

    for (const num of arr) {
        secondSum += num;
    }

    console.log(arr);
    console.log(firstSum);
    console.log(secondSum);
}

addAndSubtract([5, 15, 23, 56, 35]);
addAndSubtract([-5, 11, 3, 0, 2]);