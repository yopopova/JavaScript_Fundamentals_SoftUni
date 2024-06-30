function solve() {
    let arr = [5, '#', [1, 23, 1], {}, 10];

    let newArr = arr.filter((element) => {
        if (typeof element === 'number') { // If we write !==, it will return anything from the array that is not a number.
            return element;
        }
    });

    console.log(newArr); // filter() iterates the array and returns the result of the check in a new array.
}

solve();