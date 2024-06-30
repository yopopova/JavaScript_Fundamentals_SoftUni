function rightPlace(firstString, char, secondString) {
    let newString = firstString.replace("_", char); // We can also replace whole words, not just characters.
    // ^ .replace() only replaces the first character encountered ('_'), if we have another underscore in the word it won't replace it.

    let result = newString === secondString ? "Matched" : "Not Matched";
    console.log(result);
    // ^ Can also be done directly in the console: console.log(firstString === secondString ? "Matched" : "Not Matched");
}

rightPlace('Str_ng', 'I', 'Strong');
rightPlace('Str_ng', 'i', 'String');