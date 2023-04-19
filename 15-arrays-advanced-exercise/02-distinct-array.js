function distinctArray(input) {
    let result = [];

    for (let num of input) {
        if (!result.includes(num)) {
            result.push(num);
        }
    }

    console.log(result.join(' '));
}