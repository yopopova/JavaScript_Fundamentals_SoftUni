function makeADictionary(input) {
    let dictionary = {};

    for (let str of input) {
        let obj = JSON.parse(str); // Convert the JSON strings to objects.
        dictionary = Object.assign(dictionary, obj); // Merge all objects into one.
    }

    let sortedDicKeys = Object.keys(dictionary); // Returns an array of the keys in the object.
    sortedDicKeys.sort((a, b) => a.localeCompare(b)); // Returns an array of the alphabetically ordered words.

    for (let word of sortedDicKeys) {
        let definition = dictionary[word];
        console.log(`Term: ${word} => Definition: ${definition}`);
    }
}

makeADictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]);