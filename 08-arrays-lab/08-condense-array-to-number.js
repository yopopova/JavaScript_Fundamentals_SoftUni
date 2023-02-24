function condenseArrayToNumber(numbers) {
    let condensedArr = [];

    while (numbers.length > 1) {
        for (let index = 0; index < numbers.length - 1; index++) {
            let currentEl = numbers[index];
            let nextEl = numbers[index + 1];
            condensedArr.push(currentEl + nextEl);
        }

        numbers = condensedArr;
        condensedArr = [];
    }

    console.log(numbers[0]);
}