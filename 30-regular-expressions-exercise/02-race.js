function race(input) {
    let namePattern = /[A-Za-z]/g;
    let distancePattern = /[\d]/g;

    let racerNames = input.shift().split(', ');
    let racers = {};

    for (let name of racerNames) {
        racers[name] = 0;
    }

    while (input[0] !== 'end of race') {
        let line = input.shift();

        let letters = line.match(namePattern);
        let numbers = line.match(distancePattern);

        let name = letters.join('');
        let distances = numbers.map(Number);

        let totalDistance = 0;

        for (let x of distances) {
            totalDistance += x;
        }

        if (racers[name] !== undefined) {
            racers[name] += totalDistance;
        }
    }

    let result = Object.entries(racers).sort((a, b) => b[1] - a[1]); // Масив от масиви.

    if (result[0]) {
        console.log(`1st place: ${result[0][0]}`);
    }

    if (result[1]) {
        console.log(`2nd place: ${result[1][0]}`);
    }

    if (result[2]) {
        console.log(`3rd place: ${result[2][0]}`);
    }
}