function partyTime(input) {
    let guestList = {
        vip: [],
        regular: []
    };

    let guest = input.shift();

    while (guest !== 'PARTY') {
        let firstChar = guest[0];

        if (isNaN(firstChar)) {
            guestList.regular.push(guest);
        } else {
            guestList.vip.push(guest);
        }

        guest = input.shift();
    }

    for (let guest of input) {
        if (guestList.vip.includes(guest)) {
            let index = guestList.vip.indexOf(guest);
            guestList.vip.splice(index, 1);
        } else if (guestList.regular.includes(guest)) {
            let index = guestList.regular.indexOf(guest);
            guestList.regular.splice(index, 1);
        }
    }

    let vipCount = guestList.vip.length;
    let regularCount = guestList.regular.length;

    console.log(vipCount + regularCount);
    console.log(guestList.vip.join('\n'));
    console.log(guestList.regular.join('\n'));
}