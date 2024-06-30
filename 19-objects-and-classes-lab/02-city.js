function cityPrinter(city) {
    let cityEntries = Object.entries(city);

    for (let [cityKey, cityValue] of cityEntries) {
        console.log(`${cityKey} -> ${cityValue}`);
    }
}

cityPrinter({ name: "Sofia", area: 492, population: 1238438, country: "Bulgaria", postCode: "1000" });
cityPrinter({ name: "Plovdiv", area: 389, population: 1162358, country: "Bulgaria", postCode: "4000" });