function mergeArrays(firstArr, secondArr) {
    let finalArr = [];

    firstArr.map((el, i) => {
        if (i % 2 === 0) {
            finalArr.push(Number(firstArr[i]) + Number(secondArr[i]));
        } else {
            finalArr.push(firstArr[i] + secondArr[i]);
        }
    });

    console.log(finalArr.join(' - '));
}