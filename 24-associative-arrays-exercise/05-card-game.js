function cardGame(input) {
    let deck = [];
    let playerCards = {};

    for (let line of input) {
        let [playerName, cards] = line.split(': ');
        deck = cards.split(', ');

        if (!playerCards[playerName]) {
            playerCards[playerName] = deck.toString();
        } else {
            playerCards[playerName] += ',' + deck;
        }
    }

    for (let item in playerCards) {
        let set = new Set(playerCards[item].split(','));
        deck = Array.from(set);

        playerCards[item] = deck;
    }

    for (let key in playerCards) {
        let sum = 0;
        let finalDeck = playerCards[key];

        for (let i = 0; i < finalDeck.length; i++) {
            let currentCard = finalDeck[i].split('');
            let type = currentCard.pop();
            let power = 0;

            for (const firstPart of currentCard) {
                if (firstPart === "J") {
                    power = 11;
                } else if (firstPart === "Q") {
                    power = 12;
                } else if (firstPart === "K") {
                    power = 13;
                } else if (firstPart === "A") {
                    power = 14;
                } else {
                    power += firstPart;
                }
            }

            if (type === 'S') {
                sum += Number(power) * 4;
            } else if (type === 'H') {
                sum += Number(power) * 3;
            } else if (type === 'D') {
                sum += Number(power) * 2;
            } else if (type === 'C') {
                sum += Number(power) * 1;
            }

            power = 0;
        }

        console.log(`${key}: ${sum}`);
    }
}