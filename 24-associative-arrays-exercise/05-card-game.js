function cardGame(input) {
    let deck = [];
    let playerCards = {};

    for (let line of input) {
        let [playerName, cards] = line.split(': ');
        deck = cards.split(', ');

        if (!playerCards[playerName]) {
            playerCards[playerName] = deck.toString();
            // If the player's name is not there, add it as a key and give it the cards as a value.
        } else {
            playerCards[playerName] += ',' + deck;
            // If the player name has it, add only the cards as a value.
        }
    }

    for (let item in playerCards) {
        let set = new Set(playerCards[item].split(','));
        deck = Array.from(set); // We don't add '.entries()' here because it will return us an array.
        // ^ This returns us an array of all the player's cards, removing duplicates.

        playerCards[item] = deck;
    }

    for (let key in playerCards) {
        let sum = 0;
        let finalDeck = playerCards[key];
        // ^ This is how we get the values ​​of the keys ie. decks of player cards to go through each one.

        for (let i = 0; i < finalDeck.length; i++) { // Go through each map.
            let currentCard = finalDeck[i].split(''); // Split the map elements.
            let type = currentCard.pop(); // We get the type by extracting the last element from the map name.
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

            power = 0; // Reset the carat power to move on to the next one.
        }

        console.log(`${key}: ${sum}`);
    }
}

// cardGame(['Peter: 2C, 4H, 9H, AS, QS', 'Tomas: 3H, 10S, JC, KD, 5S, 10S', 'Andrea: QH, QC, QS, QD', 'Tomas: 6H, 7S, KC, KD, 5S, 10C', 'Andrea: QH, QC, JS, JD, JC', 'Peter: JD, JD, JD, JD, JD, JD']);
cardGame(['John: 2C, 4H, 9H, AS, QS', 'Slav: 3H, 10S, JC, KD, 5S, 10S', 'Alex: 6H, 7S, KC, KD, 5S, 10C', 'Thomas: QH, QC, JS, JD, JC', 'Slav: 6H, 7S, KC, KD, 5S, 10C', 'Thomas: QH, QC, JS, JD, JC', 'Alex: 6H, 7S, KC, KD, 5S, 10C', 'Thomas: QH, QC, JS, JD, JC', 'John: JD, JD, JD, JD']);