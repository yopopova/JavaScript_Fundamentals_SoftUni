function solve() {
    // Reference types store in their variable the address to where they are in memory.
    // In this case, the two arrays share a piece of memory.

    let arr = [1, 2, 3];
    let arr2 = arr.slice(0); // This is the correct way to assign an array - via copy.
    // When we write 0 in (), it means that we start copying from the first element (at index 0) to the end of the array ie. we take all the elements.

    arr.push(100); // Modify the first array.
    console.log(arr2); // And the change doesn't affect the second one.
}

solve();