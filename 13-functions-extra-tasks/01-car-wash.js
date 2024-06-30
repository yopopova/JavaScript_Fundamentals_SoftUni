function carWash(arrOfCommands) {
    let cleaningState = 0;

    function cleaning(arr) {
        for (let i = 0; i < arr.length; i++) {
            let element = arr[i];

            if (element === 'soap') {
                cleaningState += 10;
            } else if (element === 'water') {
                cleaningState += cleaningState * 0.2;
            } else if (element === 'vacuum cleaner') {
                cleaningState += cleaningState * 0.25;
            } else if (element === 'mud') {
                cleaningState -= cleaningState * 0.1;
            }
        }

        return cleaningState;
    }

    let cleaningPercentage = cleaning(arrOfCommands);
    console.log(`The car is ${cleaningPercentage.toFixed(2)}% clean.`);
}

carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);