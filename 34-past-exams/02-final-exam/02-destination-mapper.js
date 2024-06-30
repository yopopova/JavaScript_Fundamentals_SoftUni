function destinationMapper(input) {
    let text = input;
    let regEx = /(=|\/)([A-Z][A-Za-z]{3,})\1/g;

    let validMatch;
    let destinations = [];

    while (validMatch = regEx.exec(text)) {
        destinations.push(validMatch);
    }

    let travelPoints = 0;
    let destinationNames = [];

    for (let des of destinations) {
        let currentDes = des[2];
        let desPoints = currentDes.length;

        destinationNames.push(currentDes);
        travelPoints += desPoints;
    }

    console.log(`Destinations: ${destinationNames.join(', ')}`);
    console.log(`Travel Points: ${travelPoints}`);
}

destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
destinationMapper("ThisIs some InvalidInput");