function rotateArray(arr) {
    let arrL = arr.length;
    let amountOfRotation = arr.pop(arr[arrL - 1]);
    let num = Number(amountOfRotation);

    for (let i = 0; i < num; i++) {
        let lastElement = arr.pop();
        arr.unshift(lastElement);
    }

    console.log(arr.join(' '));
}