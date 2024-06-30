function tseamAccount(arr) {
    let newAccount = arr[0].split(' ');
    let arrL = arr.length;

    for (let i = 1; i < arrL; i++) { // We start from 1, because we have already had the first element of the array.
        let text = arr[i].split(' ');
        let command = text[0];
        let game = text[1];

        if (command === 'Install' && newAccount.includes(game) === false) {
            newAccount.push(game);

        } else if (command === 'Uninstall' && newAccount.includes(game)) {
            let index = newAccount.indexOf(game); // First we have to find the elemnet's index out.
            newAccount.splice(index, 1); // And then we remove the elemnent on this index.

        } else if (command === 'Update' && newAccount.includes(game)) {
            let index = newAccount.indexOf(game); // First we have to find the elemnet's index out.
            newAccount.splice(index, 1); // And then we remove the elemnent on this index.
            newAccount.push(game); // After that we add the game in the last position of the array.

        } else if (command === 'Expansion') {
            let expansionGame = game.split('-'); // When we want to make a new array with .split(), we should make a new variable.
            let firstPart = expansionGame[0]; // We take the first part of the element.

            if (newAccount.includes(firstPart)) {
                let newGame = expansionGame.join(':'); // We set up the two parts in the right format.
                let index = newAccount.indexOf(firstPart); // We find the game index out.
                newAccount.splice(index + 1, 0, newGame); // We use the index, we won't delelte any items, but we will add a new item in the array.
            }

        } else if (command === 'Play!') {
            break;
        }
    }

    console.log(newAccount.join(' '));
}

tseamAccount(['CS WoW Diablo', 'Install LoL', 'Uninstall WoW', 'Update Diablo', 'Expansion CS-Go', 'Play!']);
tseamAccount(['CS WoW Diablo', 'Uninstall XCOM', 'Update PeshoGame', 'Update WoW', 'Expansion Civ-V', 'Play!']);