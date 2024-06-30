function dungeonestDark(arr) {
    let health = 100;
    let coins = 0;
    let rooms = arr[0].split('|'); // Split the array to remove the '|' and get the names of the rooms.
    let isDead = false;

    for (let i = 0; i < rooms.length; i++) {
        const roomArr = rooms[i].split(' '); // Split the elements in the room into a string and a number.
        let item = roomArr[0]; // Get the string.
        let n = Number(roomArr[1]); // Get the number.

        if (item === 'potion') {
            if (100 - health <= n) {
                n = 100 - health;
            }

            health += n;
            console.log(`You healed for ${n} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (item === 'chest') {
            coins += n;
            console.log(`You found ${n} coins.`);
        } else {
            health -= n;

            if (health > 0) {
                console.log(`You slayed ${item}.`);
            } else {
                isDead = true;
                console.log(`You died! Killed by ${item}.`);
                console.log(`Best room: ${i + 1}`);
                break;
            }
        }
    }

    if (!isDead) {
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}

dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
// dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);