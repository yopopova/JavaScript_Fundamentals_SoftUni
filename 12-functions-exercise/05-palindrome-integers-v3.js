function palindromeIntegers(input) {
    let arrOfNumbers = input;
    let inputL = arrOfNumbers.length;

    let isPalindrome = (num) => {
        let startNum = num;
        let reversedNum = Number(num.toString().split('').reverse().join(''));

        return startNum === reversedNum ? 'true' : 'false';
    };

    for (let i = 0; i < inputL; i++) {
        let currentNumber = arrOfNumbers[i];
        console.log(isPalindrome(currentNumber));
    }
}