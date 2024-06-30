function printDna(number) {
    let helix = 'ATCGTTAGGG';
    let counter = 0;

    for (let i = 0; i < number; i++) {

        if (i % 4 == 0) {
            console.log(`**${helix[counter % 10]}${helix[(counter % 10) + 1]}**`);
        } else if (i % 4 == 1) {
            console.log(`*${helix[counter % 10]}--${helix[(counter % 10) + 1]}*`);
        } else if (i % 4 == 2) {
            console.log(`${helix[counter % 10]}----${helix[(counter % 10) + 1]}`);
        } else if (i % 4 == 3) {
            console.log(`*${helix[counter % 10]}--${helix[(counter % 10) + 1]}*`);
        }

        counter += 2; // We increment the counter by '2' each time, because we take two consecutive symbols from 'helix' each time the loop turns.
    }
}

printDna(4);
printDna(10);