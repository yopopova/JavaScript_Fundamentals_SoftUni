function solve() {
    // Reference types store in their variable the address to where they are in memory.
    // In this case, the two arrays share a piece of memory.

    let arr = [1, 2, 3];
    let arr2 = arr; // This is the wrong way to assign an array.

    arr.push(100); // We only change the first array.
    console.log(arr2); // But the change also affects the second one.

    // In this case, whatever change happens to arr, it will be reflected in arr2 - always!!!
}

solve();