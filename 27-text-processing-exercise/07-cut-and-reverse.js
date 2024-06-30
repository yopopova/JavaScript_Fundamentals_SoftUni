function cutAndReverse(str) {
    let firstPart = str.substring(0, str.length / 2)
    .split('')
    .reverse()
    .join('');

    // ^ First we concatenate to make the string an array because the '.reverse()' method is only supported by arrays ie. we don't have it with thongs.

    let secondPart = str.substring(str.length / 2)
    .split('')
    .reverse()
    .join('');

    console.log(firstPart);
    console.log(secondPart);
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
// cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');