function solve() {
    let arr = ['5', '123', '55', '11'];
    console.log(arr);

    // map() loops and applies a given condition to the entire array and returns the result of the looped elements in a new array.

    let arrOfNumbers = arr.map((element) => {
        element = Number(element);
        return element * 2;
    });
    console.log(arrOfNumbers);
}

solve();