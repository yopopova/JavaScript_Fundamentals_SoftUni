function sumFirstAndLast(input) {
    let arr = input.slice();
    let first = Number(arr.shift());
    let last = Number(arr.pop());

    let sum = first + last;
    return sum;
}

console.log(sumFirstAndLast(['20', '30', '40']));
console.log(sumFirstAndLast(['5', '10']));