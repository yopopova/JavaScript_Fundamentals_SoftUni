function cityPrinter(city) {
    let cityKeys = Object.keys(city);

    for (let key of cityKeys) {
        console.log(`${key} -> ${city[key]}`);
    }
}