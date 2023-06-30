function solve(input) {
    let people = Number(input.shift());
    let wagons = input[0].split(' ').map(Number);
    let wagonsL = wagons.length;

    let maxSeats = 4;

    for (let i = 0; i < wagonsL; i++) {
        let takenSeats = Number(wagons[i]);

        if (people === 0) {
            console.log('The lift has empty spots!');
            console.log(`${wagons.join(' ')}`);
            return;
        }

        if (takenSeats < 4) {
            if (people >= maxSeats - takenSeats) {
                people -= maxSeats - takenSeats;
                wagons[i] = 4;

            } else {
                wagons[i] = people;
                people -= people;

                if (people === 0) {
                    console.log('The lift has empty spots!');
                    console.log(`${wagons.join(' ')}`);
                    return;
                }
            }
        }
    }

    if (people > 0) {
        console.log(`There isn't enough space! ${people} people in a queue!`);
        console.log(`${wagons.join(' ')}`);
    }

    if (people === 0) {
        console.log(`${wagons.join(' ')}`);
    }
}