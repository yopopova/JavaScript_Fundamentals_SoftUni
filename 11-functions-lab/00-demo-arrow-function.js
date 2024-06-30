// Arrow function examples

// Arrow function with 1 argument
let increasement = x => x + 1;
console.log(increasement(5)); // If we have 2 or more arguments, it will take the first one.

// Arrow function with 1 argument - v2
let increasement2 = x => { // When we have only one argument we can miss the ().
    return x + 1;
}
console.log(increasement2(5));


// Arrow function with 2 or more arguments
let multiply = (a, b) => a * b;
console.log(multiply(5, 10));

// Arrow function with 2 or more arguments - v2
let multiply2 = (a, b) => {
    return a * b;
}
console.log(multiply2(5, 10));