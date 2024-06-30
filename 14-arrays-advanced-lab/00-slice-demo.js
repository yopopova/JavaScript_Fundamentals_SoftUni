function solve() {

    let arr = [1, 2, 10, 66, -5, 13, 6, 11];
    let index = arr.indexOf(66);
    let arr2 = arr.slice(index, index + 3); // This is the correct way to pass parameters to a slice and take elements from an array.

    console.log(arr2);
}

solve();