function solve() { // Sort strings. Strings can be compared more things than numbers.

    let arr = ['b', 'ccc', 'aa'];

    let sortedArr = arr.sort((a, b) => {
        return a.length - b.length; // From elements with smaller to elements with greater length.

        // return b.length - a.length; // From elements with greater length to elements with less length.

        // Performs the sorting by comparing each number to the next and continues until satisfied,
        // that all the numbers are sorted correctly.
    });

    console.log(sortedArr);
}

solve();