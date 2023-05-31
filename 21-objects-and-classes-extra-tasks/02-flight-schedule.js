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