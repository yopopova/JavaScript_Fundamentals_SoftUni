let processOddNumbers = nums => nums
    .filter((x, i) => i % 2 === 1) // In this option, no semicolon is written at the end of the line.
    .map(x => x * 2)
    .reverse()
    .join(' ')

console.log(processOddNumbers);

processOddNumbers([10, 15, 20, 25]);
processOddNumbers([3, 0, 10, 4, 7, 3]);