function reverseAnArrayOfStrings(arr) {
    let newArr = arr.slice().reverse().join(' ');
    console.log(newArr);
}

reverseAnArrayOfStrings(['a', 'b', 'c', 'd', 'e']);
reverseAnArrayOfStrings(['abc', 'def', 'hig', 'klm', 'nop']);
reverseAnArrayOfStrings(['33', '123', '0', 'dd']);