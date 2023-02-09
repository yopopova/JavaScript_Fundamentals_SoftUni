function reversedChars(charOne, charTwo, charThree) {
    charOne = charOne.toString();
    charTwo = charTwo.toString();
    charThree = charThree.toString();

    let arr = [];
    arr.push(charOne, charTwo, charThree);
    arr.reverse();

    let arrL = arr.length;
    let str = '';

    for (let i = 0; i < arrL; i++) {
        str += arr[i] + ' ';
    }

    console.log(str);
}