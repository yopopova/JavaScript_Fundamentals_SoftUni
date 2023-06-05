function oddOccurrences(input) {
    let words = input.toLowerCase().split(' ');
    let map = new Map();

    for (let word of words) {
        let num = 0;

        if (map.has(word)) {
            num = map.get(word);
        }
        
        num++;
        map.set(word, num);
    }

    let entries = Array.from(map);
    let filtredElements = entries.filter((el) => {
        return el[1] % 2 !== 0;
    });

    let result = [];

    for (let word of filtredElements) {
        result.push(word[0]);
    }

    console.log(result.join(' '));
}