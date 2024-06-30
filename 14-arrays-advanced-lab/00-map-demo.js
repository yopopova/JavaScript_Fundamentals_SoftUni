function solve() {
    let arr = ['5', '123', '55', '11'];
    console.log(arr);

    // map() loops and applies a given condition to the entire array and returns the result of the looped elements in a new array.

    let arrOfNumbers = arr.map((element) => {
        return Number(element);
    });
    console.log(arrOfNumbers);
}

solve();