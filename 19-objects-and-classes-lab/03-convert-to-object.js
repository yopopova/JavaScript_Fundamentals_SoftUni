function convertToObject(text) {
    let obj = JSON.parse(text); // Convert the input string to an object.
    let objEntries = Object.entries(obj); // Make an array of the tuples (pair values) of the object.

    for (let [key, value] of objEntries) {
        console.log(`${key}: ${value}`);
    }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
convertToObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}');