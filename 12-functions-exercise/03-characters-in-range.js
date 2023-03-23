function charactersInRange(a, b) {
    let firstChar = a.charCodeAt();
    let secondChar = b.charCodeAt();

    function charsInline(x, y) {
        let line = '';

        for (let i = x + 1; i < y; i++) {
            line += String.fromCharCode(i) + ' ';
        }

        return line;
    }

    return firstChar > secondChar ? charsInline(secondChar, firstChar) : charsInline(firstChar, secondChar);
}