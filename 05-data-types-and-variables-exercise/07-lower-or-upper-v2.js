function lowerOrUpper(input) {
    let char = input.toString();
    let upper = char.toUpperCase();
    let result = '';

    if (upper === char) {
        result = 'upper-case';
    } else {
        result = 'lower-case';
    }

    console.log(result);
}

lowerOrUpper('L');
lowerOrUpper('f');