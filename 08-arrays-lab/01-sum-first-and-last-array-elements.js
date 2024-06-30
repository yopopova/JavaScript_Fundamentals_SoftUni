function sumFirstSndLastArrayElements(arr) {
    let firstNum = arr[0];
    let lastNum = arr[arr.length - 1];
    let sum = firstNum + lastNum;
    console.log(sum);
}

sumFirstSndLastArrayElements([20, 30, 40]);
sumFirstSndLastArrayElements([10, 17, 22, 33]);
sumFirstSndLastArrayElements([11, 58, 69]);
sumFirstSndLastArrayElements([2]); // Here the program returns 4 because the first element also appears as the last element in the array.