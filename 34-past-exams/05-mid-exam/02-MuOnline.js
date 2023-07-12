function muOnline(input) {
    let arr = [];
    arr.push(input);
    let rooms = arr[0].split('|');

    let health = 100;
    let bitcoins = 0;
    let isDead = false;

    for (let i = 0; i < rooms.length; i++) {
        const roomArr = rooms[i].split(' ');
        let command = roomArr[0];
        let num = Number(roomArr[1]);

        if (command === 'potion') {
            if (100 - health <= num) {
                num = 100 - health;
            }

            health += num;
            console.log(`You healed for ${num} hp.`);
            console.log(`Current health: ${health} hp.`);

        } else if (command === 'chest') {
            bitcoins += num;
            console.log(`You found ${num} bitcoins.`);

        } else {
            health -= num;

            if (health > 0) {
                console.log(`You slayed ${command}.`);
            } else {
                isDead = true;
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${i + 1}`);
                break;
            }
        }
    }

    if (!isDead) {
        console.log("You've made it!");
        console.log(`Bitcoins: ${bitcoins}`);
        console.log(`Health: ${health}`);
    }
}