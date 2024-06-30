function leapYear(n) { // Solution with ternary operator.

    let isLeap = n % 4 === 0 && n % 100 !== 0 || n % 400 === 0;
    // ^ Depending on the result of the condition, the variable isLeap will be true or false.

    let result = isLeap ? "yes" : "no";
    console.log(result);

    // isLeap ? console.log("yes") : console.log("no");
    // ^ Another way to print the final result, but it's not good.
    // ^ The first console.log() with "yes" is printed if the condition returned true.
    // ^ The second console.log() with "no" is printed if the condition returned false.
}

leapYear(1984);
leapYear(2003);
leapYear(4);