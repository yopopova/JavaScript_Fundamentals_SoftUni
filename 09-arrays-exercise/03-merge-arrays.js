function mergeArrays(firstArr, secondArr) {
    let thirdArr = [];

    for (let i = 0; i < firstArr.length; i++) {
        let result = 0;

        if (i % 2 === 0) {
            result = Number(firstArr[i]) + Number(secondArr[i]);
        } else {
            result = firstArr[i] + secondArr[i];
        }

        thirdArr.push(result);
    }

    console.log(thirdArr.join(' - '));
}