function nonDecreasingSubsequence(arr) {
    let biggerNum = Number.MIN_SAFE_INTEGER;
    let newArr = [];

    for (let element of arr) {
        if (element >= biggerNum) {
            biggerNum = element;
        } else {
            continue;
        }

        newArr.push(biggerNum);
    }

    console.log(newArr.join(' '));
}