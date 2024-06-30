function censoredText(text) {
    // This is how we make fully censored text, with spaces remaining spaces, i.e. there are asterisks only in place of words.

    let withoutSpaces = ''; // This is the variable into which we will collect the new censored string.

    for (let ch of text) {
        if (ch !== ' ') {
            withoutSpaces += '*'; // If character is non-space, append '*'.
        } else {
            withoutSpaces += ' '; // If the character is a space, paste a space.
        }
    }

    console.log(withoutSpaces);
}

censoredText('A small sentence with some words');