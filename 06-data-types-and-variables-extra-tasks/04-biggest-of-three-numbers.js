function biggestOfThreeNumbers(numOne, numTwo, numThree) {
    numOne = Number(numOne);
    numTwo = Number(numTwo);
    numThree = Number(numThree);

    let arr = [];
    arr.push(numOne, numTwo, numThree);
    let biggestNum = Math.max(...arr); // When taking the largest number from an array, we always write ... in front of the array name.
    console.log(biggestNum);
}

biggestOfThreeNumbers(-2, 7, 3);
biggestOfThreeNumbers(130, 5, 99);
biggestOfThreeNumbers(43, 43.2, 43.1);