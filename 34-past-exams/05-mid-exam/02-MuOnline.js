function muOnline(input) {
    let arr = [];
    arr.push(input);
    let rooms = arr[0].split('|'); // Here we write arr[0] because we have only 1 element in the array and we want to work on it.

    let health = 100;
    let bitcoins = 0;
    let isDead = false;

    for (let i = 0; i < rooms.length; i++) {
        const roomArr = rooms[i].split(' '); // Split the elements in the room into a string and a number.
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

muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");