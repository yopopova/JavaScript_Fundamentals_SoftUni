function integerAndFloat(num1, num2, num3) {
    let sum = num1 + num2 + num3;
    let type = sum % 1 === 0 ? "Integer" : "Float";

    console.log(`${sum} - ${type}`);
}

integerAndFloat(9, 100, 1.1);
integerAndFloat(100, 200, 303);