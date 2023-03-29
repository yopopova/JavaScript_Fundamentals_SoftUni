function perfectNumber(n) {
    let sum = 0;

    function perfectOrNot(num) {
        for (let i = 1; i < num; i++) {
            if (num % i === 0) {
                sum += i;
            }
        }
        return sum;
    }

    let result = '';

    if (perfectOrNot(n) === n) {
        result = `We have a perfect number!`;
    } else {
        result = `It's not so perfect.`;
    }

    return result;
}