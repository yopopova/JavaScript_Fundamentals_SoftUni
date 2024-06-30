function towns(input) {
    for (let table of input) {
        let [town, latitude, longitude] = table.split(' | ');

        let currentTownInfo = {
            town: town,
            latitude: Number(latitude).toFixed(2), // We can also just write 'latitude,' and the program will understand that it should take that value.
            longitude: Number(longitude).toFixed(2) // In this case we write it in full because we have to convert it to a number and fix it.
        }

        console.log(currentTownInfo);
    }
}

towns(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']);
towns(['Plovdiv | 136.45 | 812.575']);