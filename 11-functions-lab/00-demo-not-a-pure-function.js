// Not a pure function example
// When a function contains 'console.log()' it isn't a pure function, because 'console.log()' is itself a function.

function printText(text) {
    console.log(text);
}

printText('SoftUni');