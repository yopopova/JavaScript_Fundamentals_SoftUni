function perfectNumber(n) {

    function perfectOrNot(num) {
        let sum = 0;

        for (let i = 1; i < num; i++) {
            if (num % i === 0) {
                sum += i;
            }
        }
        return sum;
    }

    let result = perfectOrNot(n) === n ? "We have a perfect number!" : "It's not so perfect.";
    console.log(result);
}

perfectNumber(6);
perfectNumber(28);
perfectNumber(1236498);