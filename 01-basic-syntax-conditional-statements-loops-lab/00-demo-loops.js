function solve() {
    // In the while loop, the structure is represented as follows:

    let num = 1; // 1. First declare the variable before the loop itself.

    while (num <= 3) { // 2. Then the condition is passed in the parentheses.
        console.log(num++); // 3. Finally, in the loop itself, the step is placed.
    }

    console.log(num); // This is how we also print the result of the last increment of num, a.k.a and the 4th.
    // If we don't write this line, only the numbers 1 through 3 that match the condition in the loop will be printed to the console.
}

solve();