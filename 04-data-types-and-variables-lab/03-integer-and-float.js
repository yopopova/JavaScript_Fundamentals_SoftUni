function integerAndFloat(num1, num2, num3) {
    let sum = num1 + num2 + num3;

    if (Number.isInteger(sum)) {
        console.log(`${sum} - Integer`);
    } else {
        console.log(`${sum} - Float`);
    }
}