function partyTime(input) {
    let guestList = {
        vip: [],
        regular: []
    };

    let guest = input.shift();
    // ^ We take the first element and remove it from the array, making it a variable of the 'while' loop.
    // ^ This way in 'input' we will only have the elements after the 'PARTY' command left.
    // ^ We also check that the first command is not 'PARTY' so we don't loop the list in vain.

    while (guest !== 'PARTY') {
        let firstChar = guest[0];

        if (isNaN(firstChar)) { // The 'isNaN()' method returns 'true' if the given character is a letter and 'false' if the given character is a number.
            guestList.regular.push(guest);
        } else {
            guestList.vip.push(guest);
            // ^ We need to insert 'guest' because if we insert 'firstChar' into the array we will only get the first characters.
        }

        guest = input.shift(); // We write it again here so we don't make an infinite loop.
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

// partyTime(['7IK9Yo0h', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc', 'tSzE5t0p', 'PARTY', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc']);
partyTime(['m8rfQBvl', 'fc1oZCE0', 'UgffRkOn', '7ugX7bm0', '9CQBGUeJ', '2FQZT3uC', 'dziNz78I', 'mdSGyQCJ', 'LjcVpmDL', 'fPXNHpm1', 'HTTbwRmM', 'B5yTkMQi', '8N0FThqG', 'xys2FYzn', 'MDzcM9ZK', 'PARTY', '2FQZT3uC', 'dziNz78I', 'mdSGyQCJ', 'LjcVpmDL', 'fPXNHpm1', 'HTTbwRmM', 'B5yTkMQi', '8N0FThqG', 'm8rfQBvl', 'fc1oZCE0', 'UgffRkOn', '7ugX7bm0', '9CQBGUeJ']);