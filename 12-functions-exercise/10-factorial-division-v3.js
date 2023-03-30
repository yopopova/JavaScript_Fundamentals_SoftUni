function factorialDivision(x, y) {

    function factorial(num) {
        let f = 1;

        for (let i = 1; i <= num; i++) {
            f *= i;
        }

        return f;
    }

    let result = factorial(x) / factorial(y);
    console.log(result.toFixed(2));
}