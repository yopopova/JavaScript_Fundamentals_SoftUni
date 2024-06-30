function sumEvenNumbers(arr) {
    let arrL = arr.length;
    let sum = 0;

    for (let i = 0; i < arrL; i++) {
        arr[i] = Number(arr[i]); // Let the element at the same position be the same element, but as a number.
    }

    for (let current of arr) { // Handy when we want to iterate through array elements. When we want to iterate over the elements.
        // ^ It is not recommended to assign values ​​to variables in it.
        if (current % 2 === 0) {
            sum += current;
        }
    }

    console.log(sum);
}

sumEvenNumbers(['1', '2', '3', '4', '5', '6']);
sumEvenNumbers(['3', '5', '7', '9']);
sumEvenNumbers(['2', '4', '6', '8', '10']);