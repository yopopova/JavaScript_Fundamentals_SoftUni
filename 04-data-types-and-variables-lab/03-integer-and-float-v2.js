function integerAndFloat(num1, num2, num3) {
    let sum = num1 + num2 + num3;
    let type;

    if (sum % 1 === 0) { // This is another way to find out if a number is an integer or not.
        type = "Integer";
    } else {
        type = "Float";
    }

    console.log(`${sum} - ${type}`);
}

integerAndFloat(9, 100, 1.1);
integerAndFloat(100, 200, 303);