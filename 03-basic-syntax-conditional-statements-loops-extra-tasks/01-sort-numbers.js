function sortNumbers(num1, num2, num3) {
    let inputNums = [];
    inputNums.push(num1, num2, num3);

    let highestToLowest = inputNums.sort((a, b) => b - a);
    console.log(highestToLowest.join("\n"));
}