function specialNumbers(n) {
    n = Number(n);
    let sum = 0;

    for(let i = 1; i <= n; i++) {
        i = i.toString(); // We convert it to a string to get its length and run the inner loop.
        let iLength = i.length;

        for(let k = 0; k < iLength; k++) {
            sum += Number(i[k]); // Convert it to a number so we can add the individual elements.
        }

        if(sum === 5 || sum === 7 || sum === 11) {
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);
        }

        sum = 0; // Reset the counter. Otherwise, we will accumulate the sum of all the numbers.
    }
}

specialNumbers(15);