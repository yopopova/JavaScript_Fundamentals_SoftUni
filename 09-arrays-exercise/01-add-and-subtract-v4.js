function addAndSubtract(arr) {
    let newArr = arr.slice();
    let originalArrSum = 0;
    let newArrSum = 0;

    arr.map(el => originalArrSum += Number(el));

    arr.map((el, i) => {
        if (el % 2 === 0) {
            newArr[i] = el + i;
        } else {
            newArr[i] = el - i;
        }
    });

    newArr.map(el => newArrSum += el);

    [newArr, originalArrSum, newArrSum].forEach(el => console.log(el));
}