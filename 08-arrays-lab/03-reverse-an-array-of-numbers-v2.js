function reverseAnArrayOfNumbers(n, arr) {
    let newArr = [];

    for (let i = 0; i < n; i++) {
        newArr.push(arr[i]); // This way we get the first n numbers from the array.
    }

    let revArr = [];

    for (let i = newArr.length - 1; i >= 0; i--) {
        revArr.push(newArr[i]); // Here, with a reverse for loop, we put the numbers into the new array, but in reverse.
    }

    console.log(revArr.join(' ')); // To output on a single line with a space between them.
}

reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);
reverseAnArrayOfNumbers(4, [-1, 20, 99, 5]);
reverseAnArrayOfNumbers(2, [66, 43, 75, 89, 47]);