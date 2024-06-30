function winningTicket(input) {
    let str = input.split(', ');
    // let str = input.split(/\s*,\s*/); // Trims the spaces around ','. regEx can be used in split().

    let regEx = /(?=.{20}).*?(?=(?<char>[@#$^]))(?<match>\k<char>{6,}).*(?<=.{10})\k<match>.*/;

    for (let line of str) {
        line = line.trim(); // With 'trim()' we remove leading and trailing blanks, if any.
        let validMatch = regEx.exec(line); // We'll need the groups here, so we use 'exec()'.

        if (line.length !== 20) {
            console.log("invalid ticket");

        } else if (validMatch) {
            if (validMatch.groups.match.length === 10) {
                console.log(`ticket "${line}" - ${validMatch.groups.match.length}${validMatch.groups.char} Jackpot!`);

            } else if (validMatch.groups.match.length >= 6 && validMatch.groups.match.length <= 9) {
                console.log(`ticket "${line}" - ${validMatch.groups.match.length}${validMatch.groups.char}`);
            }

        } else {
            console.log(`ticket "${line}" - no match`);
        }
    }
}

// winningTicket('Cash$$$$$$Ca$$$$$$sh');
// winningTicket('$$$$$$$$$$$$$$$$$$$$, aabb  , th@@@@@@eemo@@@@@@ey');
winningTicket('validticketnomatch:(');