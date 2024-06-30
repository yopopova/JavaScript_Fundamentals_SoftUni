function solve() {
    let arr = [5, 10, 20, 5];

    // reduce() returns final result. It can return a number, an object, etc. Below is a for loop.

    let sum = arr.reduce((sum, element) => {
            return sum + element;
    }, 0);
    // ^ We supply an initial value to sum. It's like writing 'let sum = 0;'
    // ^ The initial value can be any number, it doesn't have to be 0.

    console.log(sum);
}

solve();