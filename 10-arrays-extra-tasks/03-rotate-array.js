function rotateArray(arr) {
    let arrL = arr.length;
    let amountOfRotation = arr.pop(arr[arrL - 1]);
    let num = Number(amountOfRotation);

    for (let i = 0; i < num; i++) {
        let lastElement = arr.pop(); // We take the last element.
        arr.unshift(lastElement); // Then we put the last element in the first position.
    }

    console.log(arr.join(' '));
}

rotateArray(['1', '2', '3', '4', '2']);
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);