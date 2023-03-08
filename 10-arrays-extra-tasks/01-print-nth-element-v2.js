function printNthElement(array) {
    let arr = array.slice(0, array.length - 1);
    let step = Number(array.pop());
    let finalArr = [];

    arr.map((el, i) => {
        if (i % step === 0) {
            finalArr.push(el);
        }
    });

    console.log(finalArr.join(' '));
}