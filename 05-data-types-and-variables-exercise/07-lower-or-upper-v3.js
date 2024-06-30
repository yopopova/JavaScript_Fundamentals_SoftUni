function lowerOrUpper(input) {
    let char = input.toString();
    let isUpper = char.toUpperCase();
    let result = isUpper === char ? 'upper-case' : 'lower-case';
    console.log(result);
}

lowerOrUpper('L');
lowerOrUpper('f');