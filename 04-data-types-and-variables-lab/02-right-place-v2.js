function rightPlace(firstString, char, secondString) {
    let newString = firstString.replace("_", char); // We can also replace whole words, not just characters.
    // ^ .replace() only replaces the first character encountered ('_'), if we have another underscore in the word it won't replace it.

    if (newString === secondString) {
        console.log("Matched");
    } else {
        console.log("Not Matched");
    }
}

rightPlace('Str_ng', 'I', 'Strong');
rightPlace('Str_ng', 'i', 'String');