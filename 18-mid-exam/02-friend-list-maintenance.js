function friendListMaintenance(input) {
    let frinedsList = input.shift().split(', ');
    input.pop();
    let inputL = input.length;

    let blacklistedNamesCount = 0;
    let lostNamesCount = 0;

    for (let i = 0; i < inputL; i++) {
        let [command, elementOne, elementTwo] = input[i].split(' ');

        if (command === 'Blacklist') {
            let name = elementOne;

            if (frinedsList.includes(name)) {
                frinedsList[i] = 'Blacklisted';
                blacklistedNamesCount++;
                console.log(`${name} was blacklisted.`);
            } else {
                console.log(`${name} was not found.`);
            }

        } else if (command === 'Error') {
            let index = Number(elementOne);

            if (index >= 0 && index < frinedsList.length) {
                let currentName = frinedsList[index];

                if (currentName !== 'Blacklisted' && currentName !== 'Lost') {
                    frinedsList[index] = 'Lost';
                    lostNamesCount++;
                    console.log(`${currentName} was lost due to an error.`);
                }
            }

        } else if (command === 'Change') {
            let changeIndex = Number(elementOne);
            let newName = elementTwo;

            if (changeIndex >= 0 && changeIndex < frinedsList.length) {
                let oldName = frinedsList[changeIndex];
                frinedsList[changeIndex] = newName;
                console.log(`${oldName} changed his username to ${newName}.`);
            }
        }
    }

    console.log(`Blacklisted names: ${blacklistedNamesCount}`);
    console.log(`Lost names: ${lostNamesCount}`);
    console.log(frinedsList.join(' '));
}