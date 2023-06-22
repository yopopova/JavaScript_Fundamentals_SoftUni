function hogwarts(input) {
    let spell = input.shift();
    let abracadabraCommand = input.pop();
    let inputL = input.length;

    for (let line of input) {
        let [command, elOne, elTwo] = line.split(' ');

        if (command === "Abjuration") {
            spell = spell.toUpperCase();
            console.log(spell);

        } else if (command === "Necromancy") {
            spell = spell.toLowerCase();
            console.log(spell);

        } else if (command === "Illusion") {
            let index = Number(elOne);
            let letter = elTwo;

            if (index >= 0 && index < spell.length) {
                let firstPart = spell.substring(0, index);
                let secondPart = spell.substring(index + 1);
                let illusionSpell = firstPart.concat(letter, secondPart);
                spell = illusionSpell;
                console.log('Done!');
            } else {
                console.log('The spell was too weak.');
            }

        } else if (command === "Divination") {
            let firstSubstr = elOne;
            let secondSubstr = elTwo;

            if (spell.includes(firstSubstr)) {
                spell = spell.split(firstSubstr).join(secondSubstr);
                console.log(spell);
            }

        } else if (command === "Alteration") {
            let searchedSubstr = elOne;

            if (spell.includes(searchedSubstr)) {
                let i = spell.indexOf(searchedSubstr);
                let partOne = spell.substring(0, i);
                let str = spell.substring(i, i + searchedSubstr.length);
                let partThree = spell.substring(i + searchedSubstr.length);

                let newSpell = partOne.concat(partThree);
                spell = newSpell;
                console.log(spell);
            }

        } else {
            console.log('The spell did not work!');
        }
    }
}