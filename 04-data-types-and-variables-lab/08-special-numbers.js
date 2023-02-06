function specialNumbers(n) {
    n = Number(n);
    let sum = 0;

    for(let i = 1; i <= n; i++) {
        i = i.toString();
        let iLength = i.length;

        for(let k = 0; k < iLength; k++) {
            sum += Number(i[k]);
        }

        if(sum === 5 || sum === 7 || sum === 11) {
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);
        }

        sum = 0;
    }
}