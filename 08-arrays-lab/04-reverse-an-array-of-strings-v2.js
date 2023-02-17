function reverseAnArrayOfStrings(arr) {
    let revArr = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        revArr.push(arr[i]);
    }

    console.log(revArr.join(' '));
}