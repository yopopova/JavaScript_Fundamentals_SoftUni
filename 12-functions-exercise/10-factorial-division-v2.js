function factorialDivision(x, y) {

    function factorial(num) {

        if (num === 0) {
            return 1;
        }

        return num * factorial(num - 1);
    }

    return (factorial(x) / factorial(y)).toFixed(2);
}