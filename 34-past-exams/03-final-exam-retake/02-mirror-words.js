function mirrorWords(input) {
    let text = input[0];
    let regEx = /(@|#)([A-Za-z]{3,})\1\1([A-Za-z]{3,})\1/g;

    let validMatch;
    let words = [];

    while (validMatch = regEx.exec(text)) {
        words.push(validMatch);
    }

    if (words.length === 0) {
        console.log("No word pairs found!");
    } else {
        console.log(`${words.length} word pairs found!`);
    }

    let wordPairs = [];

    for (let line of words) {
        let firstWord = line[2];
        let secondWord = line[3];
        let reversedWord = line[3].split('').reverse().join('');
        let arr = [];

        if (firstWord === reversedWord) {
            arr.push(firstWord, secondWord);
            wordPairs.push(arr);
        }

        arr = [];
    }

    if (wordPairs.length === 0) {
        console.log("No mirror words!");
    } else {
        let wordArr = [];

        for (let line of wordPairs) {
            let wordOne = line[0];
            let wordTwo = line[1];
            let arr = [];

            arr.push(wordOne, wordTwo);
            let newArr = arr.join(' <=> ');
            wordArr.push(newArr);
        }

        console.log('The mirror words are:');
        console.log(wordArr.join(', '));
    }
}

mirrorWords(['@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r']);
// mirrorWords(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@']);
// mirrorWords(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#']);