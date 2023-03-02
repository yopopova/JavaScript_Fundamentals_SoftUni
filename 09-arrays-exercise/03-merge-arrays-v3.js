function mergeArrays(firstArr, secondArr) {
    let firstArray = firstArr;
    let secondArray = secondArr;
    let resultArr = [];
    let firstL = firstArray.length;

    for (let i = 0; i < firstL; i++) {
        let resultArrElement;

        if (i % 2 === 0) {
            resultArrElement = Number(firstArray[i]) + Number(secondArray[i]);
        } else {
            resultArrElement = firstArray[i] + secondArray[i];
        }

        resultArr.push(resultArrElement);
    }

    console.log(resultArr.join(' - '));
}