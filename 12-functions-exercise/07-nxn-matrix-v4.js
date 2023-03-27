function matrix(input) {
    let number = input;

    const rowGenerator = (num) => {
        let output = `${num} `.repeat(num);
        return output;
    }

    for (let j = 1; j <= number; j++) {
        console.log(rowGenerator(number));
    }
}