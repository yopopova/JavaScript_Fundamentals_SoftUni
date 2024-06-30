function condenseArrayToNumber(arr) {
    // let condensedArr = [];

    while (arr.length > 1) { // Loop until we have more than one element in the array.
        // The moment we get to having only 1 element in the array means we found the number.
        let condensedArr = [];

        for (let i = 0; i < arr.length - 1; i++) { // Round to arr.length - 1 because we'll be adding to the penultimate element.
            let numOne = arr[i]; // Here we get the current element.
            let numTwo = arr[i + 1]; // Here we take the next element [i + 1] so we can finally add the two elements together.
            let sum = numOne + numTwo; // Here we add the two elements.
            condensedArr.push(sum); // Add the sum of the current and next element to the new array (condensedArr).
        }

        arr = condensedArr; // So we remove the old array and put the new array (condensedArr) in its place.
        // ^ Here the elements of 3 will become 2 on the first rotation.
    }

    console.log(arr[0]); // We call only the first element of the array, since after the while loop we only have one element in the array.
}

condenseArrayToNumber([2, 10, 3]);
condenseArrayToNumber([5, 0, 4, 1, 2]);
condenseArrayToNumber([1]);