function worldTour(input) {
    let stops = input.shift();
    let travelCommand = input.pop();
    let inputL = input.length;

    for (let i = 0; i < inputL; i++) {
        let [command, elOne, elTwo] = input[i].split(':');

        if (command === 'Add Stop') {
            let addIndex = Number(elOne);
            let str = elTwo;

            if (addIndex >= 0 && addIndex < stops.length) {
                let ptTwo = stops.slice(addIndex);
                stops = stops.slice(0, addIndex).concat(str, ptTwo);
            }

        } else if (command === 'Remove Stop') {
            let startIndex = Number(elOne);
            let endIndex = Number(elTwo);

            if (startIndex >= 0 && startIndex < stops.length && endIndex >= 0 && endIndex < stops.length) {
                let searchedWord = stops.substring(startIndex, endIndex + 1);
                stops = stops.replace(searchedWord, '');
            }

        } else if (command === 'Switch') {
            let oldString = elOne;
            let newString = elTwo;

            if (stops.includes(oldString)) {
                stops = stops.replace(oldString, newString);
            }
        }

        console.log(stops);
    }

    console.log(`Ready for world tour! Planned stops: ${stops}`);
}