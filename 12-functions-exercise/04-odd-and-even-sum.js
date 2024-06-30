function oddAndEvenSum(n) {
    let digitsArr = splitNumber(n); // We always tell the program what parameter we want to use.
    let sums = sumsArr(digitsArr);
    let result = `Odd sum = ${sums[1]}, Even sum = ${sums[0]}`;

    function splitNumber(num) {
        return num.toString().split(''); // This will return array of string.
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

let result = oddAndEvenSum('1000435');
console.log(result);