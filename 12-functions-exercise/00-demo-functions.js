function sumOfTwoNumbers(firstNum, secondNum) {
    let sum = firstNum + secondNum;
    // let sum = 100 + 200;
    return sum;
}

function result() {
    console.log(sumOfTwoNumbers(100, 200, 300));
    // 100 goes in place of firstNum and 200 goes in place of secondNum.
    // After taking the first two needed numbers, ignores all of the others.
}

result();