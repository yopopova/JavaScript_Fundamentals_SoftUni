function dungeonestDark(arr) {
    let health = 100;
    let coins = 0;
    let rooms = arr[0].split('|');
    let isDead = false;

    for (let i = 0; i < rooms.length; i++) {
        const roomArr = rooms[i].split(' ');
        let item = roomArr[0];
        let n = Number(roomArr[1]);

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