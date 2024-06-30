function rageQuit(str) {
    let regEx = /(?<nondigits>[\D]+)(?<digits>[0-9]+)/g;

    let validMatch;
    let arr = [];

    while (validMatch = regEx.exec(str)) {
        arr.push(validMatch);
    }

    let symbolsCount = [];
    let symbolsArray = [];

    for (let line of arr) {
        let symbols = line[1].toUpperCase();
        let num = Number(line[2]);

        for (let letter of symbols) {
            if (!symbolsCount.includes(letter)) {
                symbolsCount.push(letter);
            }
        }

        let repeatedSymbols = symbols.repeat(num);
        symbolsArray.push(repeatedSymbols);
    }

    console.log(`Unique symbols used: ${symbolsCount.length}`);
    console.log(symbolsArray.join(''));
}

rageQuit('a3');
rageQuit('aSd2&5s@1');