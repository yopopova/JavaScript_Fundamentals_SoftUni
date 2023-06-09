function countStringOccurrences(text, word) {
    let textArr = text.split(' ');
    let counter = 0;

    for (let currentWord of textArr) {
        if (currentWord === word) {
            counter++;
        }
    }

    console.log(counter);
}