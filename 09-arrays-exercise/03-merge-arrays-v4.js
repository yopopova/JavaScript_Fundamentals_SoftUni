function mergeArrays(firstArr, secondArr) {
    let finalArr = [];

    firstArr.map((el, i) => {
        if (i % 2 === 0) {
            finalArr.push(Number(firstArr[i]) + Number(secondArr[i]));
        } else {
            finalArr.push(firstArr[i] + secondArr[i]);
        }
    });

    console.log(finalArr.join(' - ')); // To print them with dashes and spaces between them.
}

mergeArrays(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11']);
mergeArrays(['13', '12312', '5', '77', '4'], ['22', '333', '5', '122', '44']);