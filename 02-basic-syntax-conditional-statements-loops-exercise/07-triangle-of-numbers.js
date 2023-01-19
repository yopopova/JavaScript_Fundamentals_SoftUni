function triangleOfNumbers(n) {
    for (let i = 1; i <= n; i++) {
        let buffer = "";

        for (let j = 1; j <= i; j++) {
            buffer += i + " ";
        }

        console.log(buffer);
    }
}