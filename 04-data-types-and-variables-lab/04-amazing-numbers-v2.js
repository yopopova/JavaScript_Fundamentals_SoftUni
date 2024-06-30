function amazingNumbers(num) {
    num = num.toString(); // We transform the input to string, because we want to use it in for loop.
    let sum = 0;

    for (let i = 0; i < num.length; i++) {
        sum += Number(num[i]); // We transform the string to numbers.
    }

    let isContaining9 = sum.toString().includes("9"); // We transform the numbers to string again, because we want ot check out if there is a "9" symbol in the string.
    let result = isContaining9 ? `${num} Amazing? True` : `${num} Amazing? False`;
    console.log(result);
}

amazingNumbers(1233);
amazingNumbers(999);