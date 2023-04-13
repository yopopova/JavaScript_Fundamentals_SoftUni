function train(input) {
    let wagons = input.shift().split(' ').map(Number);
    let maxCapacity = Number(input.shift());
    let inputL = input.length;

    for (let i = 0; i < inputL; i++) {
        let [command, num] = input[i].split(' ');

        if (command === 'Add') {
            num = Number(num);
            wagons.push(num);
        } else {
            let passengers = Number(command);

            for (let j = 0; j < wagons.length; j++) {
                let currentPassengers = Number(wagons[j]);

                if (currentPassengers + passengers <= maxCapacity) {
                    let allPassengers = currentPassengers + passengers;
                    let index = wagons.indexOf(wagons[j]);
                    wagons.splice(index, 1, allPassengers);
                    break;
                }
            }
        }
    }

    console.log(wagons.join(' '));
}