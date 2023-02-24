function condenseArrayToNumber(arr) {

    while (arr.length > 1) {
        let condensedArr = [];

        for (let i = 0; i < arr.length - 1; i++) {
            let numOne = arr[i];
            let numTwo = arr[i + 1];
            let sum = numOne + numTwo;
            condensedArr.push(sum);
        }

        arr = condensedArr;
    }

    console.log(arr[0]);
}