function nonDecreasingSubsequence(arr) {
    console.log(arr.filter((element, index) => element >= Math.max(...arr.slice(0, index))).join(' '));
    // .slice(0, index) - we start from zero-index and we continue to the end of the array, because we don't set the .slice() end up.
}

nonDecreasingSubsequence([1, 3, 8, 4, 10, 12, 3, 2, 24]);
// nonDecreasingSubsequence([1, 2, 3, 4]);
// nonDecreasingSubsequence([20, 3, 2, 15, 6, 1]);
// nonDecreasingSubsequence([-12, -6, -8, -2, -24, 0, 2]);