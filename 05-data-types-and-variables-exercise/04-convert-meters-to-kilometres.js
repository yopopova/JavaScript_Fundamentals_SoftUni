function convertMetersToKilometres(input) {
    let distanceInMeters = Number(input);
    let distanceInKilometers = distanceInMeters / 1000;
    console.log(distanceInKilometers.toFixed(2));
}

convertMetersToKilometres(1852);
convertMetersToKilometres(798);