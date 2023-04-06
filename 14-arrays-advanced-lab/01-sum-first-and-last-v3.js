function sumFirstAndLast(input) {
    let arr = input.slice();
    let first = Number(arr.shift());
    let last = Number(arr.pop());

    let sum = first + last;
    return sum;
}