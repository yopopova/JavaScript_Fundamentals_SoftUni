function rotateArray(array) {
    let arr = array.slice(0, array.length - 1);
    let step = Number(array.slice().pop());

    for (let i = 0; i < step; i++) {
        let lastElement = arr.pop();
        arr.unshift(lastElement);
    }

    console.log(arr.join(' '));
}

rotateArray(['1', '2', '3', '4', '2']);
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);