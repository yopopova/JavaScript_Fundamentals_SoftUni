function carWash(arrOfCommands) {
    let cleaningState = 0;

    function cleaning(arr) {
        for (let element of arr) {
            switch (element) {
                case 'soap':
                    cleaningState += 10;
                    break;
                case 'water':
                    cleaningState += cleaningState * 0.2;
                    break;
                case 'vacuum cleaner':
                    cleaningState += cleaningState * 0.25;
                    break;
                case 'mud':
                    cleaningState -= cleaningState * 0.1;
                    break;
            }
        }

        return cleaningState;
    }

    let cleaningPercentage = cleaning(arrOfCommands);
    console.log(`The car is ${cleaningPercentage.toFixed(2)}% clean.`);
}