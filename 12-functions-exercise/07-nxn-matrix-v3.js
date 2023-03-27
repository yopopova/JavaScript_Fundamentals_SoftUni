function matrix(input) {
    let number = input;

    const rowGenerator = (num) => {
        let output = '';

        for (let i = 1; i <= num; i++) {
            output += `${number} `;
        }
        return output;
    }

    for (let j = 1; j <= number; j++) {
        console.log(rowGenerator(number));
    }
}