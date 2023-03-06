function arrayRotation(arr, rotationsCount) {
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