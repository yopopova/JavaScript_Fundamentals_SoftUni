function addAndSubtract(x, y, z) {
    let sum = (a, b) => a + b;
    let subtract = (a, b) => a - b;

    let result = subtract(sum(x, y), z);
    return result;
}

let result = addAndSubtract(23, 6, 10);
console.log(result);