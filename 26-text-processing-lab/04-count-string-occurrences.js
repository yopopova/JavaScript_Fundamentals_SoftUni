function countStringOccurrences(text, word) { // Here the code is written so that only a specific word is encountered during the check.
    let textArr = text.split(' ');
    let counter = 0;

    for (let currentWord of textArr) {
        if (currentWord === word) {
            counter++;
        }
    }

    console.log(counter);
}

countStringOccurrences('This is a word and it also is a sentence', 'is');