function rounding(num, prec) {
    let ourNumber = num;
    let precision = prec;

    if (precision > 15) { // If the number we're rounding to is greater than 15, we set it to 15 (conditionally).
        precision = 15;
    }

    let result = ourNumber.toFixed(precision); // Here we truncate the numbers after the decimal point as given to us by condition.
    console.log(parseFloat(result)); // This insures that the program will trim off any unnecessary zeros.
}

rounding(3.1415926535897932384626433832795, 2);
rounding(10.5, 3);