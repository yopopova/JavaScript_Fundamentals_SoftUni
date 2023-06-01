function addressBook(input) {
    let adrBook = {};

    for (let entry of input) {
        entry = entry.split(':');
        let name = entry[0];
        let address = entry[1];
        adrBook[name] = address;
    }

    let sortedArray = Object.entries(adrBook);

    sortedArray.sort((a, b) => {
        let keyA = a[0];
        let keyB = b[0];

        return keyA.localeCompare(keyB);
    });

    for (sortedEntry of sortedArray) {
        console.log(`${sortedEntry[0]} -> ${sortedEntry[1]}`);
    }
}