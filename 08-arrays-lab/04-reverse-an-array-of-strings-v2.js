function reverseAnArrayOfStrings(arr) { // Solution by creating a new array.
    let revArr = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        revArr.push(arr[i]);
    }

    console.log(revArr.join(' '));
}

reverseAnArrayOfStrings(['a', 'b', 'c', 'd', 'e']);
reverseAnArrayOfStrings(['abc', 'def', 'hig', 'klm', 'nop']);
reverseAnArrayOfStrings(['33', '123', '0', 'dd']);