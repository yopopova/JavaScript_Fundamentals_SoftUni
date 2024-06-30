function neighborhoods(input) {
    let neighborhoodsArr = new Map();
    let currentNeighborhoods = input.shift().split(', ');

    for (let neighborhood of currentNeighborhoods) {
        neighborhoodsArr.set(neighborhood, []); // Thus, via .set(), we fill Map().
        // ^ We also write an empty array since we don't have people living in this neighborhood yet.
    }

    for (let currentPerson of input) {
        currentPerson = currentPerson.split(' - ');
        let personNeighborhood = currentPerson[0];
        let person = currentPerson[1];

        if (neighborhoodsArr.has(personNeighborhood)) {
            neighborhoodsArr.get(personNeighborhood).push(person);
            // ^ So we take all the keys (neighborhoods) and add the values ​​(the specific people who live there) to them.
        }
    }

    let sortedNeighborhoods = Array.from(neighborhoodsArr.entries()); // We make it an array to sort it.
    sortedNeighborhoods.sort((a, b) => b[1].length - a[1].length); // b[1] is the array of people whose length we are taking.

    for (let currentEntry of sortedNeighborhoods) {
        let neighborhoodToPrint = currentEntry[0];
        let personsToPrint = currentEntry[1];
        console.log(`${neighborhoodToPrint}: ${personsToPrint.length}`);

        for (let currentPerson of personsToPrint) {
            console.log(`--${currentPerson}`);
        }
    }
}

neighborhoods(['Abbey Street, Herald Street, Bright Mews', 'Bright Mews - Garry', 'Bright Mews - Andrea', 'Invalid Street - Tommy', 'Abbey Street - Billy']);