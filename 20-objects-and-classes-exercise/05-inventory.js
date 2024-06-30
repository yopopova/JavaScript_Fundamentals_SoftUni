function inventory(input) {
    let heroes = [];

    for (let heroInfo of input) {
        let [name, level, items] = heroInfo.split(' / ');

        let splited = items.split(', ');
        let splitedTwo = splited.sort((a, b) => a.localeCompare(b)).join(', '); // Sort the elements alphabetically as per condition.
        // ^ It is important to keep the code in variables in the above places, otherwise the changes we make will not affect the final output we print.

        let hero = { // Create the object.
            name: name,
            level: +level, // '+' is instead of Number(level)
            items: splitedTwo
        };

        heroes.push(hero); // We put the objects in the array.
    }

    let sortedHeroesByLevel = heroes.sort((a, b) => a.level - b.level);
    // ^ We sort the characters by their level as per condition.

    sortedHeroesByLevel.forEach(hero => {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    });
}

inventory(['Isacc / 25 / Apple, GravityGun', 'Derek / 12 / BarrelVest, DestructionSword', 'Hes / 1 / Desolator, Sentinel, Antara']);