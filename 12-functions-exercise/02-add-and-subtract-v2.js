function addAndSubtract(x, y, z) {

    let sum = function(a, b) {
        return a + b;
    }

    let subtract = function(a, b) {
        return a - b;
    }

    let result = subtract(sum(x, y), z);
    return result;
}

let result = addAndSubtract(23, 6, 10);
console.log(result);