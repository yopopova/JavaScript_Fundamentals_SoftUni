function countStringOccurrences(text, str) {
    let newText = text;
    let counter = 0;

    while(newText.includes(str)) {
        counter++;
        newText = newText.replace(str, '');
    }

    console.log(counter);
}