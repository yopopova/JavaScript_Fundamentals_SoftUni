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

    console.log(thirdArr.join(' - ')); // To print them with dashes and spaces between them.
}

mergeArrays(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11']);
mergeArrays(['13', '12312', '5', '77', '4'], ['22', '333', '5', '122', '44']);