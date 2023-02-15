function biggestOfThreeNumbers(numOne, numTwo, numThree) {
    numOne = Number(numOne);
    numTwo = Number(numTwo);
    numThree = Number(numThree);

    let arr = [];
    arr.push(numOne, numTwo, numThree);
    let biggestNum = Math.max(...arr);
    console.log(biggestNum);
}