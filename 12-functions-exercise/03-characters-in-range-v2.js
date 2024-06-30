function charactersInRange(first, second) {
    let firstSymbolAsNumber = first.charCodeAt(0);
    let secondSymbolAsNumber = second.charCodeAt(0);

    let smallerNum = Math.min(firstSymbolAsNumber, secondSymbolAsNumber);
    let biggerNum = Math.max(firstSymbolAsNumber, secondSymbolAsNumber);
    let result = [];

    for (let i = smallerNum + 1; i < biggerNum; i++) {
        let currentElement = String.fromCharCode(i);
        result.push(currentElement);
    }

    console.log(result.join(' '));
}

charactersInRange('a', 'd');
charactersInRange('#', ':');
charactersInRange('C', '#');