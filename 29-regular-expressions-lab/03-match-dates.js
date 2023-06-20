function matchDates(text) {
    let regEx = /(?<day>\d{2})([\.\-\/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})/g

    let validMatch;

    while ((validMatch = regEx.exec(text)) !== null) {
        let day = validMatch.groups.day;
        let month = validMatch.groups.month;
        let year = validMatch.groups.year;

        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
    }
}