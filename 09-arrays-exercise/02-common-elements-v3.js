function commonElements(firstArr, secondArr) {
    let firstArray = firstArr;
    let secondArray = secondArr;
    let firstL = firstArray.length;

    for (let i = 0; i < firstL; i++) {
        let firstArrElement = firstArray[i];

        if (firstArray.includes(firstArrElement) && secondArray.includes(firstArrElement)) {
            console.log(firstArrElement);
        }
    }
}