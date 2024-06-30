function processOddNumbers(input) {
    let predicate = (x, i) => i % 2 === 1; // For each x and its index, check if the index is divisible by 2 with a remainder.
    let filtered = input.filter(predicate);

    let operation = x => x * 2;
    let mapped = filtered.map(operation);

    mapped.reverse();
    console.log(mapped.join(' '));
}

processOddNumbers([10, 15, 20, 25]);
processOddNumbers([3, 0, 10, 4, 7, 3]);