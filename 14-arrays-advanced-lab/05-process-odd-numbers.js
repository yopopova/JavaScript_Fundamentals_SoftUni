function processOddNumbers(input) {
    let predicate = (x, i) => i % 2 === 1;
    let filtered = input.filter(predicate);

    let operation = x => x * 2;
    let mapped = filtered.map(operation);

    mapped.reverse();
    console.log(mapped.join(' '));
}