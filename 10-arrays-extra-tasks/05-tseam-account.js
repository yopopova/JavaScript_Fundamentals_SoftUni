function tseamAccount(arr) {
    let newAccount = arr[0].split(' ');
    let arrL = arr.length;

    for (let i = 1; i < arrL; i++) {
        let text = arr[i].split(' ');
        let command = text[0];
        let game = text[1];

        if (command === 'Install') {
            if (newAccount.includes(game)) {
                continue;
            } else {
                newAccount.push(game);
            }

        } else if (command === 'Uninstall') {
            if (newAccount.includes(game)) {
                let index = newAccount.indexOf(game);
                newAccount.splice(index, 1);
            }

        } else if (command === 'Update') {
            if (newAccount.includes(game)) {
                let index = newAccount.indexOf(game);
                newAccount.splice(index, 1);
                newAccount.push(game);
            }

        } else if (command === 'Expansion') {
            let expansionGame = game.split('-');
            let firstPart = expansionGame[0];

            if (newAccount.includes(firstPart)) {
                let newGame = expansionGame.join(':');
                let index = newAccount.indexOf(firstPart);
                newAccount.splice(index + 1, 0, newGame);
            }

        } else if (command === 'Play!') {
            break;
        }
    }

    console.log(newAccount.join(' '));
}