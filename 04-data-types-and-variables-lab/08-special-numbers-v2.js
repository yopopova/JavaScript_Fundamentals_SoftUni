function specialNumbers(n) {
    n = Number(n);
    let sum = 0;
    let result = '';

    for(let i = 1; i <= n; i++) {
        i = i.toString();
        let iLength = i.length;

        for(let k = 0; k < iLength; k++) {
            sum += Number(i[k]);
        }

        result = sum === 5 || sum === 7 || sum === 11;
        console.log(result ? `${i} -> True` : `${i} -> False`);
        sum = 0;
    }
}