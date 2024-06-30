function phoneBook(input) {
    let assocArr = {};

    for (let entry of input) {
        entry = entry.split(' ');
        assocArr[entry[0]] = entry[1];
        // ^ With [entry[0]] we get the key and with entry[1] I add the value to it.
    }

    for (let assocKey in assocArr) {
        console.log(`${assocKey} -> ${assocArr[assocKey]}`);
        // ^ With ${assocKey} we get the key and with ${assocArr[assocKey]} we get the value of the given key.
    }
}

phoneBook(['Tim 0834212554', 'Peter 0877547887', 'Bill 0896543112', 'Tim 0876566344']);