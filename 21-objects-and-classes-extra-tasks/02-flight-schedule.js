function flightSchedule(input) {
    let inputArr = input.slice();
    let sectors = inputArr.shift();
    let changedStatuses = inputArr.shift();
    let finalStatus = inputArr.shift()[0];

    let flights = [];

    class Flight {
        constructor(destination, status, flightNumber) {
            this.destination = destination,
            this.status = status,
            this.flightNumber = flightNumber
        }
    }

    for (let line of sectors) {
        let [flightNum, city] = line.split(' ');
        flights.push(new Flight(city, 'Ready to fly', flightNum));
    }

    flights.map(el => {
        for (let line of changedStatuses) {
            let [flightNum, status] = line.split(' ');

            if (el.flightNumber === flightNum) {
                el.status = status;
            }
        }
    });

    flights
    .filter(el => el.status === finalStatus)
    .forEach(el => console.log(`{ Destination: '${el.destination}', Status: '${el.status}' }`));
}

// flightSchedule([['WN269 Delaware',
//     'FL2269 Oregon',
//     'WN498 Las Vegas',
//     'WN3145 Ohio',
//     'WN612 Alabama',
//     'WN4010 New York',
//     'WN1173 California',
//     'DL2120 Texas',
//     'KL5744 Illinois',
//     'WN678 Pennsylvania'],
// ['DL2120 Cancelled',
//     'WN612 Cancelled',
//     'WN1173 Cancelled',
//     'SK430 Cancelled'],
// ['Cancelled']
// ]);

flightSchedule([['WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'],
['DL2120 Cancelled',
    'WN612 Cancelled',
    'WN1173 Cancelled',
    'SK330 Cancelled'],
['Ready to fly']
]);