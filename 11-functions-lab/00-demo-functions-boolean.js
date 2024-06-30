// Function with boolean result

function isValid(index, array) {
    return index >= 0 && index < array.length;
}

let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(isValid(11, arr));