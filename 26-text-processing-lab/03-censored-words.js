function censoredWords(text, word) {
    let censored = '*'.repeat(word.length);
    let newText = text.replace(word, censored);

    while (newText.includes(word)) {
        // ^ As long as the text contains the given word, replace the word with the censored one.

        // Because '.replace()' only replaces the first word it encounters, so
        // we use 'while' because we can't be sure if the text doesn't contain
        // a few more times the given word in itself.

        newText = newText.replace(word, censored);
    }

    console.log(newText);
}

censoredWords('A small sentence with some words', 'small');