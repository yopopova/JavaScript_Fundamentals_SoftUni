function reverseAnArrayOfStrings(arr) { // Solution without creating a new array.

    for (let i = 0; i < arr.length / 2; i++) { // This way we iterate through half of the array.
        let buffer = arr[i]; // Holds the first part of the array (a, b, c).
        arr[i] = arr[arr.length - 1 - i]; // Holds the second part of the array (c, d, e).
        // The index of the current element is equal to the index of the last element minus the index of the current element.
        // Swapping the array goes from left to right.
        // From the last element (length - 1) of the array, we subtract i (the index/place we are currently at).
        arr[arr.length - 1 - i] = buffer;
        // The index of the last element of the array minus the current index equals the index of the current element.
        // a.k.a exchange places with him.
    }

    console.log(arr.join(' '));
}

reverseAnArrayOfStrings(['a', 'b', 'c', 'd', 'e']);
// reverseAnArrayOfStrings(['abc', 'def', 'hig', 'klm', 'nop']);
// reverseAnArrayOfStrings(['33', '123', '0', 'dd']);