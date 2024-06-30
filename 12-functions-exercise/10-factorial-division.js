function factorialDivision(x, y) {

    function factorial(num) {
        let f = 1; // We don't need 0, because every number multiplied/divided by 0 gives 0 as a result;

        for (let i = 1; i <= num; i++) {
            f *= i;
        }

        return f;
    }

    return (factorial(x) / factorial(y)).toFixed(2);
}

let result = factorialDivision(5, 2);
console.log(result);