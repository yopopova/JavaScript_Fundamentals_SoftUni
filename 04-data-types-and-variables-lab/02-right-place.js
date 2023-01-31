function rightPlace(toReplace, symbol, toCompare) {
    let finalText = "";

    for(let i = 0; i < toReplace.length; i++) {
        if(toReplace[i] === "_") {
            finalText += symbol;
        } else {
            finalText += toReplace[i];
        }
    }

    console.log(finalText === toCompare ? "Matched" : "Not Matched");
}