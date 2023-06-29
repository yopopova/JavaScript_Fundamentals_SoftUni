function thePianist(input) {
    let n = Number(input.shift());
    let stopCommand = input.pop();

    let myList = input.slice(0, n);
    let pieces = input.slice(n);

    let list = {};

    for (let line of myList) {
        let [piece, pieceComposer, pieceKey] = line.split('|');

        if (!list[piece]) {
            list[piece] = {
                composer: pieceComposer,
                key: pieceKey
            }
        }
    }

    for (let line of pieces) {
        let [command, elOne, elTwo, elThree] = line.split('|');

        if (command === 'Add') {
            let addSong = elOne;
            let addComposer = elTwo;
            let addKey = elThree;

            if (list[addSong]) {
                console.log(`${addSong} is already in the collection!`);
            } else {
                list[addSong] = {
                    composer: addComposer,
                    key: addKey
                };
                console.log(`${addSong} by ${addComposer} in ${addKey} added to the collection!`);
            }

        } else if (command === 'Remove') {
            let removeSong = elOne;

            if (list[removeSong]) {
                delete list[removeSong];
                console.log(`Successfully removed ${removeSong}!`);
            } else {
                console.log(`Invalid operation! ${removeSong} does not exist in the collection.`);
            }

        } else if (command === 'ChangeKey') {
            let song = elOne;
            let newKey = elTwo;

            if (list[song]) {
                list[song].key = newKey;
                console.log(`Changed the key of ${song} to ${newKey}!`);
            } else {
                console.log(`Invalid operation! ${song} does not exist in the collection.`);
            }
        }
    }

    let listEntries = Object.entries(list);

    listEntries.sort((pieceA, pieceB) => {
        let pieceAName = pieceA[0];
        let pieceBName = pieceB[0];

        return pieceAName.localeCompare(pieceBName);
    });

    for (let item of listEntries) {
        let currentPiece = item[0];
        let currentPieceProperties = item[1];

        console.log(`${currentPiece} -> Composer: ${currentPieceProperties.composer}, Key: ${currentPieceProperties.key}`);
    }
}