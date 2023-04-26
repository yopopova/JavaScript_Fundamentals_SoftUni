function cityPrinter(city) {
    let cityEntries = Object.entries(city);

    for (let i = 0; i < cityEntries.length; i++) {
        let [cityKey, cityValue] = cityEntries[i];
        console.log(`${cityKey} -> ${cityValue}`);
    }
}