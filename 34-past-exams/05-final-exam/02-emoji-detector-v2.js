function emojiDetector(input) {
    let text = input[0]; // Vadim the element because we have an array.

    let smileyRegEx = /(\:\:|\*\*)([A-Z][a-z][a-z]+)\1/g;
    // ^ We write '[a-z][a-z]+' to have at least 2 or more lowercase letters, as per condition because '+' is 1 or more.
    let digitRegEx = /\d/g;

    let digits = text.match(digitRegEx);
    // ^ With '.match()' we apply the Regex to the entire text to find the matches we need.
    // ^ .match() takes the matches and turns them into an array so we can iterate over them and multiply them.
    // ^ We use '.match()' when we are NOT going to work with groups.
    
    let treshold = 1; // We start at 1 because if we write 0, everything multiplied by 0 will return 0 as the result.
    digits.map(d => treshold *= Number(d)); // Here we multiply all the numbers and save the result in the variable 'threshold'.
    // ^ Here instead of '.map' we can also use '.forEach'.
    console.log(`Cool threshold: ${treshold}`);

    let validMatch;
    let emojis = []; // Here we will collect the emojis that we will extract from the text using the Regex.

    while (validMatch = smileyRegEx.exec(text)) {
        // ^ Here we are assigning and checking at the same time.
        // As long as we have a valid match, loop and apply the Regex.
        // To have a valid match, 'validMatch' must be different from 'null'.

        emojis.push(validMatch); // Here 'validMatch' is not empty, but contains the Regex groups. It is a larger object.
        // Here we just find the emojis by Regex and collect them in the array, WITHOUT checking if they are cool!!!
    }

    console.log(`${emojis.length} emojis found in the text. The cool ones are:`);

    for (let emojiMatch of emojis) {
        let emojiText = emojiMatch[2];
        // ^ In 'emojiMatch' there are total 3 things at the indices: 0: the whole match, 1: :: or **, 2: the text/name of the emoji

        let fullEmoji = emojiMatch[0]; // This is what we will print.
        let coolness = 0; // We're going to add here, so we start at 0.

        for (let letter of emojiText) {
            coolness += letter.charCodeAt();
        }

        if (coolness > treshold) {
            console.log(fullEmoji);
        }
    }
}

emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]);
// emojiDetector(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"]);