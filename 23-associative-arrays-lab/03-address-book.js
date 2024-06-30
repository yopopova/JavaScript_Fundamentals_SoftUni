function addressBook(input) {
    let adrBook = {};

    for (let entry of input) {
        entry = entry.split(':');
        let name = entry[0];
        let address = entry[1];
        adrBook[name] = address;
        // ^ We add the address as a value to the 'name' key.
    }

    let sortedArray = Object.entries(adrBook);
    // ^ We turn the object into an array of arrays so we can then sort the names alphabetically.

    sortedArray.sort((a, b) => {
        let keyA = a[0];
        let keyB = b[0];
        // return keyA - keyB; // This only works on numbers, not strings.
        return keyA.localeCompare(keyB);
    });

    for (sortedEntry of sortedArray) {
        console.log(`${sortedEntry[0]} -> ${sortedEntry[1]}`);
    }
}

addressBook(['Tim:Doe Crossing', 'Bill:Nelson Place', 'Peter:Carlyle Ave', 'Bill:Ornery Rd']);