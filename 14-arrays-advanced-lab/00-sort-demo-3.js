function solve() { // Sort strings. Strings can be compared more things than numbers.

    let arr = ['b', 'ccc', 'aa'];

    let sortedArr = arr.sort((a, b) => {
        return a.localeCompare(b); // Sorts the elements alphabetically (a-z) according to the ASCII table.

        // return b.localeCompare(a); // Sorts the elements alphabetically but in reverse (z-a) of the ASCII table.

        // Performs the sorting by comparing each number to the next and continues until satisfied,
        // that all the numbers are sorted correctly.
    });

    console.log(sortedArr);
}

solve();