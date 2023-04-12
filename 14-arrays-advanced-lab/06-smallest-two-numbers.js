function smallestTwoNumbers(input) {

    let sortedArr = input.sort((a, b) => {
        return a - b;
    });

    let lastTwoNums = sortedArr.slice(0, 2);
    
    console.log(lastTwoNums.join(' '));
}