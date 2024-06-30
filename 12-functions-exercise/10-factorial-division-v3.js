function factorialDivision(x, y) {

    function factorial(num) {
        let f = 1; // We don't need 0, because every number multiplied/divided by 0 gives 0 as a result;

        for (let i = 1; i <= num; i++) {
            f *= i;
        }

        return f;
    }

    let result = factorial(x) / factorial(y);
    console.log(result.toFixed(2));
}

factorialDivision(5, 2);
factorialDivision(6, 2);