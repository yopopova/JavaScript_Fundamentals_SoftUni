function revealWords(words, str) {
    let wordsArr = words.split(', ');

    for (let word of wordsArr) {
        let template = '*'.repeat(word.length);
        str = str.replace(template, word);
    }

    console.log(str);
}