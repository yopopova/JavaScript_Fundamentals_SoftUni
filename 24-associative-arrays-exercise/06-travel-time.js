function travelTime(input) {
    let countries = {};

    for (let row of input) {
        let [country, city, price] = row.split(' > ');
        price = Number(price);

        if (!countries.hasOwnProperty(country)) {
            countries[country] = {};
        }

        if (!countries[country].hasOwnProperty(city)) {
            countries[country][city] = price;
        }

        if (countries[country][city] > price) {
            countries[country][city] = price;
        }
    }

    let keys = Object.keys(countries);
    keys.sort((a, b) => {
        return a.localeCompare(b);
    });

    for (let item of keys) {
        let sortedCities = Object.entries(countries[item]);
        sortedCities.sort((a, b) => {
            return a[1] - b[1];
        });

        let result = [];

        for (let city of sortedCities) {
            result.push(city.join(' -> '));
        }

        console.log(`${item} -> ${result.join(' ')}`);
    }
}