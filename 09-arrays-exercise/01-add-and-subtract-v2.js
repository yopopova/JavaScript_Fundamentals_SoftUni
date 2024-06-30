function addAndSubtract(arr) {
    let firstSum = 0;
    let secondSum = 0;

    for (let i = 0; i < arr.length; i++) {
        firstSum += arr[i];

        if (arr[i] % 2 === 0) {
            arr[i] += i;
        } else {
            arr[i] -= i;
        }

        secondSum += arr[i];
    }

    console.log(arr);
    console.log(firstSum);
    console.log(secondSum);
}

addAndSubtract([5, 15, 23, 56, 35]);
addAndSubtract([-5, 11, 3, 0, 2]);