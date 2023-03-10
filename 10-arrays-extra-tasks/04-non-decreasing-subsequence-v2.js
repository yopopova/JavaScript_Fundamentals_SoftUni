function nonDecreasingSubsequence(arr) {
    console.log(arr.filter((element, index) => element >= Math.max(...arr.slice(0, index))).join(' '));
}