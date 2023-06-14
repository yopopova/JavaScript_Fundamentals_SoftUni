function hardWords(input) {
    let boyText = input[0];
    let fillers = input[1];
    let count = 0;

    for (let ch of boyText) {
        if (ch === '_') {
            count++;
        } else if (ch !== '_' && count > 0) {
            for (let word of fillers) {
                if (word.length === count) {
                    let toReplace = '_'.repeat(count);
                    boyText = boyText.replace(toReplace, word);
                    count = 0;
                }
            }
        }
    }

    console.log(boyText);
}