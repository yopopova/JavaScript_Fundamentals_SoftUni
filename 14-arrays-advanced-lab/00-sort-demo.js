function solve() { // Sort numbers.
    
    let arr = [5, 10, 1, -15, 0];

    let sortedArr = arr.sort((a, b) => {
        return a - b; // Sorts the numbers in 'Ascending Order': smallest to largest.

        // return b - a; // Sorts the numbers in 'Descending Order': largest to smallest.

        // Performs the sorting by comparing each number to the next and continues until satisfied,
        // that all the numbers are sorted correctly.
    });

    console.log(sortedArr);
}

solve();