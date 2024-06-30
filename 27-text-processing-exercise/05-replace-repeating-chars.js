function replaceRepeatingChars(str) {
    let result = '';

    for (let char of str) {
        if (char !== result[result.length - 1]) { // To see if the current element is different from the element at the last index.
            result += char;
        }
    }

    console.log(result);
}

replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');
replaceRepeatingChars('qqqwerqwecccwd');