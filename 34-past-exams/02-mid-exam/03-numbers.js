function numbers(input) {
    let numbers = input.split(' ').map(x => Number(x));
    let sum = 0;

    for (let num of numbers) {
        sum += num;
    }

    let averageValue = sum / numbers.length;
    let biggerNums = numbers.filter(x => x > averageValue);

    biggerNums = biggerNums.sort((a, b) => b - a);
    biggerNums = biggerNums.slice(0, 5);

    if (biggerNums.length === 0) {
        console.log('No');
    } else {
        console.log(biggerNums.join(' '));
    }
}