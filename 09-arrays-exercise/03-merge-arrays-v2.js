function mergeArrays(firstArr, secondArr) {
    let firstArray = firstArr;
    let secondArray = secondArr;
    let resultArr = [];

    let firstL = firstArray.length;
    let secondL = secondArray.length;

    for (let i = 0; i < firstL; i++) {
        let firstArrNumber = firstArray[i];

        for (let j = 0; j < secondL; j++) {
            let secondArrNumber = secondArray[j];

            if (i === j) {
                if (i % 2 === 0) {
                    firstArrNumber = Number(firstArrNumber);
                    secondArrNumber = Number(secondArrNumber);
                    let sumOfNumbers = firstArrNumber + secondArrNumber;
                    resultArr.push(sumOfNumbers);
                } else {
                    resultArr.push(firstArrNumber + secondArrNumber);
                    // ^ Or resultArr.push(firstArr[i] + secondArr[j]); if both are inverted in the beginning.
                }
            }
        }
    }

    console.log(resultArr.join(' - ')); // To print them with dashes and spaces between them.
}

mergeArrays(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11']);
mergeArrays(['13', '12312', '5', '77', '4'], ['22', '333', '5', '122', '44']);