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

processOddNumbers([10, 15, 20, 25]);
processOddNumbers([3, 0, 10, 4, 7, 3]);