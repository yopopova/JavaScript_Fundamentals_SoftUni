function repeatString(text, num) {
    let result = '';

    for (let i = 0; i < num; i++) {
        result += text;
    }

    return result;
}

let result = repeatString('abc', 3);
console.log(result);