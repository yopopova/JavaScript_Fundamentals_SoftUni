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

printNthElement(['5', '20', '31', '4', '20', '2']);
printNthElement(['dsa', 'asd', 'test', 'test', '2']);
printNthElement(['1', '2', '3', '4', '5', '6']);