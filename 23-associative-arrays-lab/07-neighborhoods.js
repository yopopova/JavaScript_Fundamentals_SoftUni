function neighborhoods(input) {
    let neighborhoodsArr = new Map();
    let currentNeighborhoods = input.shift().split(', ');

    for (let neighborhood of currentNeighborhoods) {
        neighborhoodsArr.set(neighborhood, []);
    }

    for (let currentPerson of input) {
        currentPerson = currentPerson.split(' - ');
        let personNeighborhood = currentPerson[0];
        let person = currentPerson[1];

        if (neighborhoodsArr.has(personNeighborhood)) {
            neighborhoodsArr.get(personNeighborhood).push(person);
        }
    }

    let sortedNeighborhoods = Array.from(neighborhoodsArr.entries());
    sortedNeighborhoods.sort((a, b) => b[1].length - a[1].length);

    for (let currentEntry of sortedNeighborhoods) {
        let neighborhoodToPrint = currentEntry[0];
        let personsToPrint = currentEntry[1];
        console.log(`${neighborhoodToPrint}: ${personsToPrint.length}`);

        for (let currentPerson of personsToPrint) {
            console.log(`--${currentPerson}`);
        }
    }
}