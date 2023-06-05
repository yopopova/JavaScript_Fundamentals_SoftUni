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
        console.log(arrayOfKeys.join('\n'));
    }
}