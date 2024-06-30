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
                    // We write 'break' because we have already found a carriage in which to seat the passengers
                    // and we want to move to the next number of passengers to accommodate.
                    // If we do not write it, we will accommodate the same number of passengers in all carriages.
                }
            }
        }
    }

    console.log(wagons.join(' '));
}

train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']);
train(['0 0 0 10 2 4', '10', 'Add 10', '10', '10', '10', '8', '6']);