function reverseAnArrayOfNumbers(n, arr) {
    let newArr = [];

    for (let i = 0; i < n; i++) {
        newArr.push(arr[i]);
    }

    let revArr = [];

    for (let i = newArr.length - 1; i >= 0; i--) {
        revArr.push(newArr[i]);
    }

    console.log(revArr.join(' '));
}