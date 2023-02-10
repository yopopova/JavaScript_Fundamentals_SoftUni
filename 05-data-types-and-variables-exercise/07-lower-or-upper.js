function lowerOrUpper(input) {
    let char = input.toString();
    let charNum = char.charCodeAt(0);

    if (charNum >= 65 && charNum <= 90) {
        console.log('upper-case');
    } else if (charNum >= 97 && charNum <= 122) {
        console.log('lower-case');
    }
}