function pascalCaseSplitter(text) {
    text = text.split('');
    let words = [];

    text.forEach(el => {
        if (el.charCodeAt(0) >= 65 && el.charCodeAt(0) <= 90) {
            words.push(el);
        } else if (el.charCodeAt(0) >= 97 && el.charCodeAt(0) <= 122) {
            words[words.length - 1] += el;
        }
    });

    console.log(words.join(', '));
}