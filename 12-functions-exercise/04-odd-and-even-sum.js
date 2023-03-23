function oddAndEvenSum(n) {
    let digitsArr = splitNumber(n);
    let sums = sumsArr(digitsArr);
    let result = `Odd sum = ${sums[1]}, Even sum = ${sums[0]}`;

    function splitNumber(num) {
        return num.toString().split('');
    }

    function sumsArr(arr) {
        let evenSum = 0;
        let oddSum = 0;

        for (let n of arr) {
            n = Number(n);

            if (n % 2 === 0) {
                evenSum += n;
            } else {
                oddSum += n;
            }
        }

        return [evenSum, oddSum];
    }

    return result;
}