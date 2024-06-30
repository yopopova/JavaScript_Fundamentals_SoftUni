function commonElements(firstArr, secondArr) {
    let firstArray = firstArr;
    let secondArray = secondArr;
    let firstL = firstArray.length;

    for (let i = 0; i < firstL; i++) {
        let firstArrElement = firstArray[i];

        if (firstArray.includes(firstArrElement) && secondArray.includes(firstArrElement)) {
            console.log(firstArrElement);
        }
    }
}

commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2']);
commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '], ['s', 'o', 'c', 'i', 'a', 'l']);