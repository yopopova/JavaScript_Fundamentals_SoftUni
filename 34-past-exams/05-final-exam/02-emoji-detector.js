function emojiDetector([input]) {
    // ^ Or input = input[0];, if we don't want [input].

    let threshold = 1;
    let coolEmojis = [];

    let digits = input.match(/\d/g).map(Number);

    for (let digit of digits) {
        threshold *= digit;
        // ^ We multiply all the digits one by one. That's why 'threshold' starts at 1, if it starts at 0, the result will be 0.
    }

    let emojis = input.match(/(::|\*\*)[A-Z][a-z]{2,}(\1)/g);

    if (emojis !== null) { // Here we check if we have any emojis at all.
        for (let emoji of emojis) {
            let coolness = 0;
            let chars = emoji.slice(2, -2);
            // We cut it this way because we want to collect only the codes from the letters, without the codes from ':' and '*'.
            
            for (let char of chars) {
                coolness += char.charCodeAt(0);
            }

            if (coolness >= threshold) {
                coolEmojis.push(emoji);
            }
        }
    }

    console.log(`Cool threshold: ${threshold}`);
    console.log(`${emojis ? emojis.length : 0} emojis found in the text. The cool ones are:`);
    // ^ If 'emojis' is 'null', this test will explode, so we make a ternary operator ie if 'null', to print 0.

    for (let emoji of coolEmojis) {
        console.log(emoji);
    }
}

emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]);