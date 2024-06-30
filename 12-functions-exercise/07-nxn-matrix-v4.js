function matrix(input) {
    let number = input;

    const rowGenerator = (num) => {
        let output = `${num} `.repeat(num); // Here we do the row without using a loop but only with the '.repeat()' method.
        return output; // Or an even shorter version of the code in the function: return `${num} `.repeat(num);
    }

    for (let j = 1; j <= number; j++) {
        console.log(rowGenerator(number)); // Here we print the finished line as many times as we need.
    }
}

matrix(3);