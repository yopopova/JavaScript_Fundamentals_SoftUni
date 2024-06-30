function binaryToDecimal(n) {
    let binary = n.toString();
    let decimal = parseInt(binary, 2);
    console.log(decimal);
}

binaryToDecimal('00001001');
binaryToDecimal('11110000');