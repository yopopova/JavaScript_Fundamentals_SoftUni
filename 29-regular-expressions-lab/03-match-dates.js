function matchDates(text) {
    let regEx = /(?<day>\d{2})([\.\-\/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})/g
    // ^ In () are the groups; with '?<>' the given group is named; with '\2' we say which group we are returning to, i.e. in this case to the 2nd.

    let validMatch;

    while ((validMatch = regEx.exec(text)) !== null) {
        let day = validMatch.groups.day;
        let month = validMatch.groups.month;
        let year = validMatch.groups.year;

        // ^ validMatch is now an object and has elements we can access.

        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
    }
}

matchDates("13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016");