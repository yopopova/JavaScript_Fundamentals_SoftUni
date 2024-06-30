function triangleOfNumbers(n) {
    for (let i = 1; i <= n; i++) {
        let buffer = i + " ";
        console.log(buffer.repeat(i));
    }
}

triangleOfNumbers(3);
// triangleOfNumbers(5);
// triangleOfNumbers(6);