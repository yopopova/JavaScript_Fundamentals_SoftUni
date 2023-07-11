function emojiDetector([input]) {
    let threshold = 1;
    let coolEmojis = [];

    let digits = input.match(/\d/g).map(Number);

    for (let digit of digits) {
        threshold *= digit;
    }

    let emojis = input.match(/(::|\*\*)[A-Z][a-z]{2,}(\1)/g);

    if (emojis !== null) {
        for (let emoji of emojis) {
            let coolness = 0;
            let chars = emoji.slice(2, -2);
            
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

    for (let emoji of coolEmojis) {
        console.log(emoji);
    }
}