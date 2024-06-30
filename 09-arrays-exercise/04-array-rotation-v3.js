function arrayRotation(arr, rotationsCount) { // Solution without .shift() method.
    let arrayOfElements = arr;
    let rotations = rotationsCount;
    let arrayL = arrayOfElements.length - 1;

    for (let i = 0; i < rotations; i++) {
        let firstElement = arrayOfElements[0];

        for (let j = 0; j < arrayL; j++) {
            arrayOfElements[j] = arrayOfElements[j + 1];
        }

        let lastIndex = arrayL;
        arrayOfElements[lastIndex] = firstElement;
    }

    console.log(arrayOfElements.join(' '));
}

arrayRotation([51, 47, 32, 61, 21], 2);
arrayRotation([32, 21, 61, 1], 4);
arrayRotation([2, 4, 15, 31], 5);