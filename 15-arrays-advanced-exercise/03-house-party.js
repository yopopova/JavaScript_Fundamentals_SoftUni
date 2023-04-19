function houseParty(input) {
    let inputL = input.length;
    let partyList = [];

    for (let i = 0; i < inputL; i++) {
        let line = input[i].split(' ');
        let name = line[0];
        let command = line[2];

        if (command === 'not') {
            if (!partyList.includes(name)) {
                console.log(`${name} is not in the list!`);
                continue;
            }

            partyList = partyList.filter((x) => {
                return x !== name;
            });

        } else {
            if (partyList.includes(name)) {
                console.log(`${name} is already in the list!`);
                continue;
            } else {
                partyList.push(name);
            }
        }
    }

    console.log(partyList.join('\n'));
}