function piccolo(input) {
    let parking = {};

    for (let element of input) {
        let [command, car] = element.split(', ');

        if (command === 'IN') {
            parking[car] = command;
        } else if (command === 'OUT') {
            delete parking[car];
        }
    }

    let arrayOfKeys = Object.keys(parking).sort((a, b) => {
        return a.localeCompare(b);
    });

    if (arrayOfKeys.length === 0) {
        console.log('Parking Lot is Empty');
    } else {
        // for (let carNum of arrayOfKeys) {
        //     console.log(carNum);
        // }

        console.log(arrayOfKeys.join('\n')); // Another way to print the numbers.
    }
}

piccolo(['IN, CA2844AA', 'IN, CA1234TA', 'OUT, CA2844AA', 'IN, CA9999TT', 'IN, CA2866HI', 'OUT, CA1234TA', 'IN, CA2844AA', 'OUT, CA2866HI', 'IN, CA9876HH', 'IN, CA2822UU']);