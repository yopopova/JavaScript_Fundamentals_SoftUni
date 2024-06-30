function oddOccurrences(input) {
    let words = input.toLowerCase().split(' ');
    let map = new Map();

    for (let word of words) {
        let num = 0;

        if (map.has(word)) {
            num = map.get(word); // Here we check how many times the word is contained in Map().
        }

        // console.log(map);
        
        num++;
        map.set(word, num); // So against the specific word that plays the role of key for us in Map(), we add how many times it is contained as the value of the key.
    }

    let entries = Array.from(map); // Convert Map() to a matrix (array of arrays).
    let filtredElements = entries.filter((el) => {
        return el[1] % 2 !== 0;
    });

    let result = [];

    for (let word of filtredElements) { // Currently our 'word' is an entire array.
        result.push(word[0]); // Here we put only the elements of index 0 of the array ie. the words.
    }

    console.log(result.join(' '));
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');