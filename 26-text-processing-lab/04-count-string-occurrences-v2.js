function countStringOccurrences(text, str) {
    // Here the code is written so that the check matches a specific string (eg is from This).

    let newText = text;
    let counter = 0;

    while(newText.includes(str)) { // Here we check if it contains the word, but it doesn't tell us exactly where it is.
        counter++;
        newText = newText.replace(str, ''); // Replace the entire word with the symbol.
        // We don't put a character to replace with because there's a chance this character was originally contained in the string
        // and if we start replacing the character with the same character, we will get an infinite loop. P.S. The example with '.' (the point).
        
        // ! There is a difference between '' and ' ' in .replace(). For the first we replace with nothing, and for the second we replace with a space.
        // ! When we use '', we will be able to count blanks with precision.
        // ! With ' ' it will count more than the washed places.
    }

    console.log(counter);
}

countStringOccurrences('This is a word and it also is a sentence', 'is');