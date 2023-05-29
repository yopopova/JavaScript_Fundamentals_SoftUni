function towns(input) {
    for (let table of input) {
        let [town, latitude, longitude] = table.split(' | ');

        let currentTownInfo = {
            town: town,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2)
        }

        console.log(currentTownInfo);
    }
}