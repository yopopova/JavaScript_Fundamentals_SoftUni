function smallestOfThreeNumbers(fNum, sNum, tNum) {
    let smallestNumber = Math.min(...arguments);
    console.log(smallestNumber);
}

smallestOfThreeNumbers(2, 5, 3);