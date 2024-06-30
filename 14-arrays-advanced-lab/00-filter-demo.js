function solve() {
    let arr = [5, 122, 55, 12];

    let newArr = arr.filter((element) => {
        if(element % 2 === 0) {
            return element;
        }
    });

    console.log(newArr); // filter() iterates the array and returns the result of the check in a new array.
}

solve();