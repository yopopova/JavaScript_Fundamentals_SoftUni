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

nonDecreasingSubsequence([1, 3, 8, 4, 10, 12, 3, 2, 24]);
// nonDecreasingSubsequence([ 1, 2, 3, 4]);
// nonDecreasingSubsequence([ 20, 3, 2, 15, 6, 1]);
// nonDecreasingSubsequence([-12, -6, -8, -2, -24, 0, -5, 2]);