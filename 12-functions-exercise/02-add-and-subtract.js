function addAndSubtract(x, y, z) {

    function sum(a, b) {
        return a + b;
    }

    function subtract(a, b) {
        return a - b;
    }

    return subtract(sum(x, y), z);
}