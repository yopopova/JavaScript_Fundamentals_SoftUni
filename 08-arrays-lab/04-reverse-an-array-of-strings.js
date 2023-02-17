function reverseAnArrayOfStrings(arr) {
    let arrL = arr.length;

    for (let i = 0; i < arrL / 2; i++) {
        let firstElement = arr[i];
        let previousIndex = arrL - 1 - i;
        arr[i] = arr[previousIndex];
        arr[previousIndex] = firstElement;
    }

    console.log(arr.join(' '));
}