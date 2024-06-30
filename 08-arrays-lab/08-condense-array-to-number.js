function condenseArrayToNumber(numbers) {
    let condensedArr = [];

    while (numbers.length > 1) { // Loop until we have more than one element in the array.
        for (let index = 0; index < numbers.length - 1; index++) { // Round up to - 1, because otherwise we'll go outside the bounds of the array.
            let currentEl = numbers[index];
            let nextEl = numbers[index + 1];
            condensedArr.push(currentEl + nextEl); // Add the sum of the current element and the next element.
        }

        numbers = condensedArr;
        condensedArr = []; // To start truncating this array again.
    }

    console.log(numbers[0]); // Since we already have only one element in the array and call it.
}

condenseArrayToNumber([2, 10, 3]);
condenseArrayToNumber([5, 0, 4, 1, 2]);
condenseArrayToNumber([1]);