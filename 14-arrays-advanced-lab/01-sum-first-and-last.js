function sumFirstAndLast(input) {
    let first = Number(takeFirst(input));
    let last = Number(takeLast(input));

    function takeFirst(arr) {
        return arr.shift();
    }

    function takeLast(array) {
        return array.pop();
    }

    return first + last;
}