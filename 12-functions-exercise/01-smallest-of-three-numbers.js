function smallestOfThreeNumbers(x, y, z) {
    let smallestNumber = Number.MAX_SAFE_INTEGER;

    // console.log(arguments[0]);

    for (let n of arguments) { // We name the variable with 'n' and searching among the argumnets of the array.
        getSmaller(n); // We put every element in this function and check it in the 'if-else'.
    }

    function getSmaller(num) {
        if (num < smallestNumber) {
            smallestNumber = num;
        }
    }

    return smallestNumber; // We return our smallest number.
}

let result = smallestOfThreeNumbers(2, 5, 3); // We lock the function parameters in variable.
console.log(result); // We invoke the variable which contains function parameters.