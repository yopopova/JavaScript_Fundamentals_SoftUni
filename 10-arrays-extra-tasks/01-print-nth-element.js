function printNthElement(arr) {
    let arrL = arr.length;
    let step = arr.pop(Number(arr[arrL - 1]));
    let newArr = [];

    for (let i = 0; i < arrL; i++) {
        if (i % step === 0) {
            newArr.push(arr[i]);
        }
    }

    console.log(newArr.join(' '));
}