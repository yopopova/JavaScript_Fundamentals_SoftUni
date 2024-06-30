function revealWords(words, str) {
    let wordsArr = words.split(', ');

    for (let word of wordsArr) {
        let template = '*'.repeat(word.length);
        // ^ We do it this way because we can encounter a word of the same length we're looking for,
        // and we only need words that contain '*' and are of the same length.

        str = str.replace(template, word); // Replace the word with '*' with the word that has the same length.
    }

    console.log(str);
}

revealWords('great', 'softuni is ***** place for learning new programming languages');
revealWords('great, learning', 'softuni is ***** place for ******** new programming languages');