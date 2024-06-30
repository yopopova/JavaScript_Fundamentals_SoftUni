function storage(input) {
    let newStorage = new Map(); // This is how we define Map().

    for (let entry of input) {
        entry = entry.split(' ');
        let name = entry[0];
        let quantity = Number(entry[1]);

        if (newStorage.has(name)) {
            let newQuantity = newStorage.get(name) + quantity;
            // ^ With newStorage.get(name) we take the old value and add the new one to it.
            newStorage.set(name, newQuantity); // So we add the new value of this name in Map().
        } else {
            newStorage.set(name, quantity);
            // ^ To add the remaining values ​​to Map().
        }
    }

    for (let entryStorage of newStorage) {
        console.log(`${entryStorage[0]} -> ${entryStorage[1]}`);
    }
}

storage(['tomatoes 10', 'coffee 5', 'olives 100', 'coffee 40']);