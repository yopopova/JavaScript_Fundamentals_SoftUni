function sumFirstAndLast(input) {
    let first = Number(input.shift());
    let last = Number(input.pop());

    let sum = first + last;
    return sum;
}