function printAndSum(start, end) {
    let startNum = start;
    let endNum = end;
    let sum = 0;
    let buffer = "";

    for (let i = startNum; i <= endNum; i++) {
        buffer += i + " "; // Print all numbers in an array as strings. Another option: buffer += `${i} `;
        sum += i; // Adds the numbers as a sum.
    }

    console.log(buffer);
    console.log(`Sum: ${sum}`);
}

printAndSum(5, 10);
printAndSum(0, 26);
printAndSum(50, 60);