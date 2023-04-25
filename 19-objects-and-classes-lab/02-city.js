function cityPrinter(city) {
    let cityEntries = Object.entries(city);

    for (let [cityKey, cityValue] of cityEntries) {
        console.log(`${cityKey} -> ${cityValue}`);
    }
}