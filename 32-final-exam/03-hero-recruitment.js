function heroRecruitment(input) {
    let endCommand = input.pop();
    let heroes = {};

    for (let line of input) {
        let [command, heroName, spell] = line.split(' ');

        if (command === 'Enroll') {
            if (heroes[heroName]) {
                console.log(`${heroName} is already enrolled.`);
            } else {
                heroes[heroName] = {
                    spellbook: []
                }
            }

        } else if (command === 'Learn') {
            if (!heroes[heroName]) {
                console.log(`${heroName} doesn't exist.`);
            } else {
                if (heroes[heroName].spellbook.includes(spell)) {
                    console.log(`${heroName} has already learnt ${spell}.`);
                } else {
                    heroes[heroName].spellbook.push(spell);
                }
            }

        } else if (command === 'Unlearn') {
            if (!heroes[heroName]) {
                console.log(`${heroName} doesn't exist.`);
            } else {
                if (!heroes[heroName].spellbook.includes(spell)) {
                    console.log(`${heroName} doesn't know ${spell}.`);
                } else {
                    let spellIndex = heroes[heroName].spellbook.indexOf(spell);
                    heroes[heroName].spellbook.splice(spellIndex, 1);
                }
            }
        }
    }

    let heroesEntries = Object.entries(heroes);

    heroesEntries.sort((heroA, heroB) => {
        let heroAName = heroA[0];
        let heroBName = heroB[0];

        let heroAProperties = heroA[1];
        let heroBProperties = heroB[1];

        if (heroAProperties.spellbook.length !== heroBProperties.spellbook.length) {
            return heroBProperties.spellbook - heroAProperties.spellbook;
        } else {
            return heroAName.localeCompare(heroBName);
        }
    });

    console.log('Heroes:');

    for (let line of heroesEntries) {
        let heroName = line[0];
        let heroProperties = line[1];

        console.log(`== ${heroName}: ${heroProperties.spellbook}`);
    }
}

heroRecruitment(["Enroll Stefan",
    "Enroll Peter",
    "Enroll Stefan",
    "Learn Stefan ItShouldWork",
    "Learn John ItShouldNotWork",
    "Unlearn George Dispel",
    "Unlearn Stefan ItShouldWork",
    "End"]);

heroRecruitment(["Enroll Stefan",
    "Learn Stefan ItShouldWork",
    "Learn Stefan ItShouldWork",
    "Unlearn Stefan NotFound",
    "End"]);

heroRecruitment(["Enroll Stefan",
    "Enroll Peter",
    "Enroll John",
    "Learn Stefan Spell",
    "Learn Peter Dispel",
    "End"]);