function specialNumbers(num) {
    for (let i = 1; i <= num; i++) {
        let sum = 0;
        let tempNum = i;

        while (tempNum > 0) {
            sum += tempNum % 10; // Here we take the second part of the number. This way we take only the units of the number.
            tempNum = parseInt(tempNum / 10); // Here we take the first fart of the number.
        }

        let isSpecial;

        if (sum === 5 || sum === 7 || sum === 11) {
            isSpecial = "True";
        } else {
            isSpecial = "False";
        }

        console.log(`${i} -> ${isSpecial}`);
    }
}

specialNumbers(15);