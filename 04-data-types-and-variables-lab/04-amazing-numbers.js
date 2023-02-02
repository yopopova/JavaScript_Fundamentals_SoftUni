function amazingNumbers(num) {
    num = num.toString();
    let sum = 0;

    for (let i = 0; i < num.length; i++) {
        sum += Number(num[i]);
    }

    let sumAsText = sum.toString();
    let isAmazing = false;

    for (let k = 0; k < sumAsText.length; k++) {
        if(sumAsText[k] === '9') {
            isAmazing = true;
            break;
        }
    }

    console.log(`${num} Amazing? ${isAmazing ? 'True' : 'False'}`);
}