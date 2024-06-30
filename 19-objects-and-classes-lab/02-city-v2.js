function cityPrinter(city) {
    let cityKeys = Object.keys(city); // So we only get the keys from the object.

    for (let key of cityKeys) {
        console.log(`${key} -> ${city[key]}`); // We write key in [] -> ${city[key]} to take it as an element.
    }
}

cityPrinter({ name: "Sofia", area: 492, population: 1238438, country: "Bulgaria", postCode: "1000" });
cityPrinter({ name: "Plovdiv", area: 389, population: 1162358, country: "Bulgaria", postCode: "4000" });