function sortNumbers(num1, num2, num3) {
    let inputNums = []; // Create a new array.
    inputNums.push(num1, num2, num3); // Add elements with .push() to the new array.

    let highestToLowest = inputNums.sort((a, b) => b - a); // Sort the numbers in descending order with .sort().
    // ^ To sort the numbers in ascending order -> inputNums.sort((a, b) => a - b);

    console.log(highestToLowest.join("\n"));
    // ^ With .join we turn the array into a string and with ("\n") we tell it that we want to print each element on a new line.
}

sortNumbers(2, 1, 3);
// sortNumbers(-2, 1, 3);
// sortNumbers(2, 0, 0);