function reverseAnArrayOfStrings(arr) {
    let arrL = arr.length;

    for (let i = 0; i < arrL / 2; i++) {
        let firstElement = arr[i];
        let previousIndex = arrL - 1 - i;
        arr[i] = arr[previousIndex];
        arr[previousIndex] = firstElement;
    }

    // When we need to reverse an array and the array has an odd number of elements,
    // the middle element remains in the same place, i.e. does not rotate/replace.

    console.log(arr.join(' '));
}

reverseAnArrayOfStrings(['a', 'b', 'c', 'd', 'e']);
reverseAnArrayOfStrings(['abc', 'def', 'hig', 'klm', 'nop']);
reverseAnArrayOfStrings(['33', '123', '0', 'dd']);