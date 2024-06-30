function factorialDivision(x, y) { // Решение с рекурсия.

    function factorial(num) {

        if (num === 0) {
            return 1; // We don't need 0, because every number multiplied/divided by 0 gives 0 as a result;
            // With this condition we are going the function out.
            // We start to return through all opened 'returns' (1 > 2 > 3 > 4 > 5), until we reach 5 (or the specific nember) and leave the function.
            // The upper row is the reason why loops are recommended when we are looking for task solutions.
        }

        return num * factorial(num - 1); // Give me back 'num' multiplied by next factorial.
        // Factroial of 5 * 4 (5 - 1) = 20; 20 * 3 (4 - 1) = 60; 60 * 2 (3 - 1) = 120; 120 * 1 (2 - 1) = 120;
    }

    return (factorial(x) / factorial(y)).toFixed(2);
}

let result = factorialDivision(5, 2);
console.log(result);