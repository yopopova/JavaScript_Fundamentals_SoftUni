function sorting(arr) {
    let sortedArr = arr.sort((a, b) => {
        return a - b;
    });

    let resultArr = [];

    while (arr.length !== 0) {
        let bigNumber = sortedArr.pop();
        let smallNumber = sortedArr.shift();

        resultArr.push(bigNumber);
        resultArr.push(smallNumber);
    }

    console.log(resultArr.join(' '));
}