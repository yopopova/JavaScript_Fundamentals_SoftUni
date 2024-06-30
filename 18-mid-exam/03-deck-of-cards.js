function deckOfCards(input) {
    let listOfCards = input.shift().split(', ');
    let commandsCount = Number(input.shift());

    for (let i = 0; i < commandsCount; i++) {
        let [command, elOne, elTwo] = input[i].split(', ');

        if (command === 'Add') {
            let card = elOne;

            if (listOfCards.includes(card)) {
                console.log('Card is already in the deck');
            } else {
                listOfCards.push(card);
                console.log('Card successfully added');
            }

        } else if (command === 'Remove') {
            let nameOfTheCard = elOne;

            if (listOfCards.includes(nameOfTheCard)) {
                let cardIndex = listOfCards.indexOf(nameOfTheCard);
                listOfCards.splice(cardIndex, 1);
                console.log('Card successfully removed');
            } else {
                console.log('Card not found');
            }

        } else if (command === 'Remove At') {
            let index = Number(elOne);

            if (index >= 0 && index < listOfCards.length) {
                listOfCards.splice(index, 1);
                console.log('Card successfully removed');
            } else {
                console.log('Index out of range');
            }

        } else if (command === 'Insert') {
            let currIndex = Number(elOne);
            let cardName = elTwo;

            if (currIndex >= 0 && currIndex < listOfCards.length) {

                if (listOfCards.includes(cardName)) {
                    console.log('Card is already added');
                } else {
                    listOfCards.splice(currIndex, 0, cardName);
                    console.log('Card successfully added');
                }
            } else {
                console.log('Index out of range');
            }
        }
    }

    console.log(listOfCards.join(', '));
}

deckOfCards(["Ace of Diamonds, Queen of Hearts, King of Clubs", "3", "Add, King of Diamonds", "Insert, 2, Jack of Spades", "Remove, Ace of Diamonds"]);
deckOfCards(["Two of Clubs, King of Spades, Five of Spades, Jack of Hearts", "2", "Add, Two of Clubs", "Remove, Five of Hearts"]);
deckOfCards(["Jack of Spades, Ace of Clubs, Jack of Clubs", "2", "Insert, -1, Queen of Spades", "Remove At, 1"]);