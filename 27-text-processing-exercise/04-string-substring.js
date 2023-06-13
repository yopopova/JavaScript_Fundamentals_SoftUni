function stringSubstring(word, text) {
    let wordToLower = word.toLowerCase();
    let sentence = text.toLowerCase();

    let sentenceAsArray = sentence.split(' ');

    if (sentenceAsArray.includes(wordToLower)) {
        console.log(wordToLower);
    } else {
        console.log(`${wordToLower} not found!`);
    }
}