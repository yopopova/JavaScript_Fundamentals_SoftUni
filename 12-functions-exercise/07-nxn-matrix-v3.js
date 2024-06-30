function matrix(input) {
    let number = input;

    const rowGenerator = (num) => {
        let output = '';

        for (let i = 1; i <= num; i++) {
            output += `${number} `; // Here we create the row in ready form.
        }
        return output;
    }

    for (let j = 1; j <= number; j++) {
        console.log(rowGenerator(number)); // Here we print the finished line as many times as we need.
        // output = ''; // If we are going to clear the 'output' variable here, then we need to export it from the 'rowGenerator' function to the main 'matrix' function.
    }
}

matrix(3);