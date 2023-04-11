function processOddNumbers(input) {

    let arr = input.filter((element, index) => {
        if (index % 2 === 1) {
            return element;
        }
    });

    let newArr = arr.map((x) => {
        return x * 2;
    });

    newArr.reverse();
    console.log(newArr.join(' '));
}