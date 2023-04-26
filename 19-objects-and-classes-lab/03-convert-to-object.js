function convertToObject(text) {
    let obj = JSON.parse(text);
    let objEntries = Object.entries(obj);

    for (let [key, value] of objEntries) {
        console.log(`${key}: ${value}`);
    }
}