function meetings(input) {
    let calendar = {};

    for (let entry of input) {
        entry = entry.split(' ');
        let weekDay = entry[0]; // This is how we get the key.
        let person = entry[1]; // This is how we get the value to the key.

        if (calendar.hasOwnProperty(weekDay)) {
            console.log(`Conflict on ${weekDay}!`);
        } else {
            calendar[weekDay] = person;
            console.log(`Scheduled for ${weekDay}`);
        }
    }

    for (let assocKey in calendar) {
        console.log(`${assocKey} -> ${calendar[assocKey]}`);
        // ^ With ${assocKey} we get the key and with ${calendar[assocKey]} we get the value of the given key.
    }
}

meetings(['Monday Peter', 'Wednesday Bill', 'Monday Tim', 'Friday Tim']);