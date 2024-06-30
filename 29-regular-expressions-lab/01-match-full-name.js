function matchFullName(text) { // This solution doesn't work in Judge.
    let regEx = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    let matches = text.match(regEx);

    for (let name of matches) {
        console.log(name);
    }
}

matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov");