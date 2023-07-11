function emojiDetector(input) {
    let text = input[0];

    let smileyRegEx = /(\:\:|\*\*)([A-Z][a-z][a-z]+)\1/g;
    let digitRegEx = /\d/g;

    let digits = text.match(digitRegEx);
    
    let treshold = 1;
    digits.map(d => treshold *= Number(d));
    
    console.log(`Cool threshold: ${treshold}`);

    let validMatch;
    let emojis = [];

    while (validMatch = smileyRegEx.exec(text)) {
        emojis.push(validMatch);
    }

    console.log(`${emojis.length} emojis found in the text. The cool ones are:`);

    for (let emojiMatch of emojis) {
        let emojiText = emojiMatch[2];

        let fullEmoji = emojiMatch[0];
        let coolness = 0;

        for (let letter of emojiText) {
            coolness += letter.charCodeAt();
        }

        if (coolness > treshold) {
            console.log(fullEmoji);
        }
    }
}