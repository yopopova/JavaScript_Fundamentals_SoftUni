function pascalCaseSplitter(text) {
    text = text.split('');
    let words = [];

    text.forEach(el => {
        if (el.charCodeAt(0) >= 65 && el.charCodeAt(0) <= 90) {
            words.push(el); // If the letter is uppercase, push it into the array.
        } else if (el.charCodeAt(0) >= 97 && el.charCodeAt(0) <= 122) {
            words[words.length - 1] += el; // If the letter is small, we paste it to the previous one.
        }
    });

    console.log(words.join(', '));
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
// pascalCaseSplitter('HoldTheDoor');
// pascalCaseSplitter('ThisIsSoAnnoyingToDo');