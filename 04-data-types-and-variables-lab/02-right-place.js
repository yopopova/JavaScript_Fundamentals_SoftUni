function rightPlace(toReplace, symbol, toCompare) {
    let finalText = "";

    for(let i = 0; i < toReplace.length; i++) {
        if(toReplace[i] === "_") {
            finalText += symbol; // When it finds a '_', replace it with the corresponding character.
        } else {
            finalText += toReplace[i]; // Otherwise, the rest of the time it prints the remaining letters of the word.
        }
    }

    console.log(finalText === toCompare ? "Matched" : "Not Matched");
}

rightPlace('Str_ng', 'I', 'Strong');
rightPlace('Str_ng', 'i', 'String');