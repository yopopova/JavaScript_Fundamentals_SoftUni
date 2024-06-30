function numbers(input) {
    let numbers = input.split(' ').map(x => Number(x));
    let sum = 0;

    for (let num of numbers) {
        sum += num;
    }

    let averageValue = sum / numbers.length; // Find the mean.
    let biggerNums = numbers.filter(x => x > averageValue);
    // ^ filter() itself will return a new array with the numbers that are greater than the mean.

    biggerNums = biggerNums.sort((a, b) => b - a);
    biggerNums = biggerNums.slice(0, 5); // This is how we get the first 5 largest numbers.

    if (biggerNums.length === 0) {
        console.log('No');
    } else {
        console.log(biggerNums.join(' '));
    }
}

numbers('10 20 30 40 50');
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');
numbers('1');
numbers('-1 -2 -3 -4 -5 -6');