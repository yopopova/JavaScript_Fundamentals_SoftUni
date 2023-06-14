function matchFullName(text) {
    let regEx = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    let matches = text.match(regEx);

    for (let name of matches) {
        console.log(name);
    }
}