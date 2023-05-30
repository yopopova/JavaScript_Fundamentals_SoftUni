function makeADictionary(input) {
    let dictionary = {};

    for (let str of input) {
        let obj = JSON.parse(str);
        dictionary = Object.assign(dictionary, obj);
    }

    let sortedDicKeys = Object.keys(dictionary);
    sortedDicKeys.sort((a, b) => a.localeCompare(b));

    for (let word of sortedDicKeys) {
        let definition = dictionary[word];
        console.log(`Term: ${word} => Definition: ${definition}`);
    }
}