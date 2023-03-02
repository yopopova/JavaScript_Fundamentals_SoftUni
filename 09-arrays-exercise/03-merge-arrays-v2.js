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
                }
            }
        }
    }

    console.log(resultArr.join(' - '));
}