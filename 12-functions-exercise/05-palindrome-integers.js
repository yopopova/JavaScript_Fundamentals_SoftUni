function palindromeIntegers(arr) {

    function isPalindrome(n) {
        let reversedN = n.toString().split('').reverse().join('');
        return Number(reversedN) === n ? true : false;
    }

    let printLines = '';

    for (let num of arr) {
        printLines += isPalindrome(num) + '\n';
    }

    return printLines;
}