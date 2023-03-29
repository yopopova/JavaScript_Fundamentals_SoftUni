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

    if (perfectOrNot(n) === n) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }
}