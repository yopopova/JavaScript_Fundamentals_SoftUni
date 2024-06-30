function solve() { // Sort strings. Strings can be compared more things than numbers.

    let arr = ['bbb', 'ccc', 'aaa'];

    let sortedArr = arr.sort((a, b) => {
        return a.length - b.length || a.localeCompare(b);

        // We can put more than one condition in sort(), using the logical operator or (||).
        // If we have no change in the array by the first criterion, sort() goes to the second criterion.
        
        // Performs the sorting by comparing each number to the next and continues until satisfied,
        // that all the numbers are sorted correctly.
    });

    console.log(sortedArr);
}

solve();