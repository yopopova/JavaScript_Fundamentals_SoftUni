function rounding(num, prec) {
    let ourNumber = num;
    let precision = prec;

    if (precision > 15) {
        precision = 15;
    }

    let result = ourNumber.toFixed(precision);
    console.log(parseFloat(result));
}