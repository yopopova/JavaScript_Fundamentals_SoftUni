function commonElements(firstArr, secondArr) {
    for (const firstEl of firstArr) {
        for (const secondEl of secondArr) { // We leave const because we won't be changing the values ​​of these variables down in the code.
            if (firstEl === secondEl) {
                console.log(firstEl);
            }
        }
    }
}

commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2']);
commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '], ['s', 'o', 'c', 'i', 'a', 'l']);