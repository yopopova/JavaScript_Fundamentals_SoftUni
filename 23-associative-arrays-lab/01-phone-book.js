function phoneBook(input) {
    let assocArr = {};

    for (let entry of input) {
        entry = entry.split(' ');
        assocArr[entry[0]] = entry[1];
    }

    for (let assocKey in assocArr) {
        console.log(`${assocKey} -> ${assocArr[assocKey]}`);
    }
}