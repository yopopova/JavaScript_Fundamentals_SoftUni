function smallestTwoNumbers(input) {

    let sortedArr = input.sort((a, b) => {
        return a - b;
    });

    let lastTwoNums = sortedArr.slice(0, 2);
    
    console.log(lastTwoNums.join(' '));
}

smallestTwoNumbers([30, 15, 50, 5]);
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);