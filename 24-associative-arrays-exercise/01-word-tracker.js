function wordTracker(input) {
    let wordsToSearch = input.shift().split(' ');
    let myWords = {};

    for (let elements of wordsToSearch) {
        myWords[elements] = 0; // The key is the word (this or sentence). Initially in the 'myWords' object we have {this: 0, sentence: 0}.
        // ^ myWords[elements] is a key, and 0 is the value of that key.
        // ^ Thus filling object. In this case, in addition to filling the object (myWords[elements]), we also set a value to each of its keys (= 0).
    }

    for (let word of input) {
        if (myWords.hasOwnProperty(word)) {
            myWords[word] += 1; // If the current word from 'input' is contained in the 'myWords' object, increment its value by 1.
        }
    }

    let sortedEntries = Object.entries(myWords).sort((a, b) => {
        return b[1] - a[1];
        // ^ At index 0 is the key of the object, and at index 1 is the value of the key.
        // ^ Since we want to sort in descending order by the values ​​found at index 1, we write 1 in [] .
    });

    // console.log(sortedEntries[1]); // This is how we go inside the array to see what it contains.

    sortedEntries.forEach((el) => {
        console.log(`${el[0]} - ${el[1]}`);
    });
}

wordTracker(['this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task']);
// wordTracker(['is the', 'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']);