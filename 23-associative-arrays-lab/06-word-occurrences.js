function wordOccurrences(input) {
    let words = new Map();

    for (let word of input) {
        if (words.has(word)) { // Check if we already have the word in Map().
            let currentCount = words.get(word); // Returns the current word count.

            // currentCount++;
            // words.set(word, currentCount); // The bottom line can also be written like this.

            words.set(word, currentCount + 1); // All subsequent times we encounter the word will be +1.
        } else {
            words.set(word, 1); // When we encounter the word for the first time, we add 1.
        }
    }

    let sortedWords = Array.from(words.entries());
    sortedWords.sort((a, b) => b[1] - a[1]);

    for (let wordEntry of sortedWords) {
        console.log(`${wordEntry[0]} -> ${wordEntry[1]} times`);
    }
}

wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);