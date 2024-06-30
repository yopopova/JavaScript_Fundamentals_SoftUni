function nextDay(year, month, day) {
    let theNextDay = new Date(year, month - 1, day + 1);
    // ^ Months in JS are counted from 0 to 11, so we write "month - 1" because we want the program to return the exact month from the input.
    // ^ Returns the month as text.
    // ^ We write "day + 1" because we want the program to return the next day as output.

    let newYear = theNextDay.getFullYear(); // WE DON'T TAKE .getYear() because it will return us a three digit number!!!
    let newMonth = theNextDay.getMonth() + 1; // .getMonth() returns the month as a number.
    // ^ We have already transferred the month to October, but in JS October as a number is 9, and we need 10, so we write + 1.

    let newDay = theNextDay.getDate(); // .getDate() returns a day of the month (1 - 31) and .getDay() returns a day of the week (0 - 6).
    // ^ This separates the individual elements from the date so we can print them in the desired format.
    
    console.log(`${newYear}-${newMonth}-${newDay}`);
}

nextDay(2016, 9, 30);