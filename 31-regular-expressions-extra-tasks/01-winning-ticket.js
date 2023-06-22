function winningTicket(input) {
    let str = input.split(', ');

    let regEx = /(?=.{20}).*?(?=(?<char>[@#$^]))(?<match>\k<char>{6,}).*(?<=.{10})\k<match>.*/;

    for (let line of str) {
        line = line.trim();
        let validMatch = regEx.exec(line);

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