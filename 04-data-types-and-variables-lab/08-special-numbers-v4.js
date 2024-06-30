function specialNumbers(num) {
    for (let i = 1; i <= num; i++) {
        let sum = 0;
        let stringNum = i.toString();

        for(let j = 0; j < stringNum.length; j++) {
            sum += Number(stringNum[j]);
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