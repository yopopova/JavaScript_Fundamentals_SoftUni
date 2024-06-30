function matchPhoneNumber(text) {
    let regEx = /(?<!\d)[+]359([ -])2\1\d{3}\1\d{4}\b/g 
    // [] also escape a given character (in this case +) as \

    let matches = [];
    let validMatch;

    while ((validMatch = regEx.exec(text)) !== null) {
        matches.push(validMatch[0]);
    }

    console.log(matches.join(', '));
}

matchPhoneNumber("+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222");