function sumFirstAndLast(input) {
    let first = Number(input.shift());
    let last = Number(input.pop());

    let sum = first + last;
    return sum;
}

console.log(sumFirstAndLast(['20', '30', '40']));
console.log(sumFirstAndLast(['5', '10']));