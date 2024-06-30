function palindromeIntegers(arr) {

    function isPalindrome(n) {
        let reversedN = n.toString().split('').reverse().join(''); // Be a string, split by your elements, and reverse the array.
        return Number(reversedN) === n ? true : false; // Here we check if the numbers are palindromes.
    }

    let printLines = ''; // It's like the 'buffer' in the previous tasks.

    for (let num of arr) {
        // console.log(isPalindrome(num)); // This is the first way to print the result (and without 'printLines' row), but the console print also undefined.
        printLines += isPalindrome(num) + '\n'; // For a new row.
    }

    // return isPalindrome(arr[1]); // Like this we check every number from the array.
    return printLines; // Like this we don't have the 'undefined' row.
}

let result = palindromeIntegers([123, 323, 421, 121]);
console.log(result);