function cityPrinter(city) {
    let cityEntries = Object.entries(city);

    for (let i = 0; i < cityEntries.length; i++) {
        let [cityKey, cityValue] = cityEntries[i];
        console.log(`${cityKey} -> ${cityValue}`);
    }
}

cityPrinter({ name: "Sofia", area: 492, population: 1238438, country: "Bulgaria", postCode: "1000" });
cityPrinter({ name: "Plovdiv", area: 389, population: 1162358, country: "Bulgaria", postCode: "4000" });