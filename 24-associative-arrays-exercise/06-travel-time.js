function travelTime(input) {
    let countries = {};

    for (let row of input) {
        let [country, city, price] = row.split(' > ');
        price = Number(price);

        if (!countries.hasOwnProperty(country)) {
            // ^ We check if the state is not in the object, and if it is not, we add it.
            countries[country] = {};
        }

        if (!countries[country].hasOwnProperty(city)) {
            countries[country][city] = price;
            // ^ We mix in the 'countries' object on the key 'country' and on the key 'city' we put 'price' as its value.
        }

        if (countries[country][city] > price) {
            countries[country][city] = price;
            // ^ If the price of the city is greater than the current price, then the price of the city is equal to the current price ie. we take the lowest price.
        }
    }

    let keys = Object.keys(countries);
    keys.sort((a, b) => {
        return a.localeCompare(b);
    });

    for (let item of keys) {
        let sortedCities = Object.entries(countries[item]); // Arrays become matrices here.
        sortedCities.sort((a, b) => {
            return a[1] - b[1]; // We write [1] because we are sorting by price, and it is at index 1.
        });

        let result = [];

        for (let city of sortedCities) {
            result.push(city.join(' -> '));
        }

        console.log(`${item} -> ${result.join(' ')}`);
    }
}

travelTime(["Bulgaria > Sofia > 500", "Bulgaria > Sopot > 800", "France > Paris > 2000", "Albania > Tirana > 1000", "Bulgaria > Sofia > 200"]);