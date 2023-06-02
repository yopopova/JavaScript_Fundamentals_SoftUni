function storage(input) {
    let newStorage = new Map();

    for (let entry of input) {
        entry = entry.split(' ');
        let name = entry[0];
        let quantity = Number(entry[1]);

        if (newStorage.has(name)) {
            let newQuantity = newStorage.get(name) + quantity;
            newStorage.set(name, newQuantity);
        } else {
            newStorage.set(name, quantity);
        }
    }

    for (let entryStorage of newStorage) {
        console.log(`${entryStorage[0]} -> ${entryStorage[1]}`);
    }
}