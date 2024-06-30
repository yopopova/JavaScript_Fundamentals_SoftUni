function triangleOfNumbers(n) {
    for (let i = 1; i <= n; i++) { // i is the number we're iterating.
        let buffer = ""; // Clears the buffer to print the next number.

        for (let j = 1; j <= i; j++) { // j (the second loop) indicates how many times a given line number will be printed/repeated.
            buffer += i + " ";
        }

        console.log(buffer);
    }
}

triangleOfNumbers(3);
// triangleOfNumbers(5);
// triangleOfNumbers(6);