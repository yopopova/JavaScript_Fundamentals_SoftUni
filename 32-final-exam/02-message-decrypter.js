function messageDecrypter(input) {
    let n = Number(input.shift());
    
    let regEx = /^(\$|\%)([A-Z][a-z]{2,})(\1)(\: )(\[\d+\]\|)(\[\d+\]\|)(\[\d+\]\|)$/g;
    let nameRegEx = /[A-Z][a-z]{2,}/g;
    let digitRegEx = /\d+/g;

    for (let i = 0; i < n; i++) {
        let currentLine = input[i];

        if (!regEx.test(currentLine)) {
            console.log('Valid message not found!');
        } else {
            let name = currentLine.match(nameRegEx);
            let digits = currentLine.match(digitRegEx);
            let message = [];

            for (let num of digits) {
                let letter = String.fromCharCode(num);
                message.push(letter);
            }

            console.log(`${name[0]}: ${message.join('')}`);
        }
    }
}

messageDecrypter(["4",
    "$Request$: [73]|[115]|[105]|",
    "%Taggy$: [73]|[73]|[73]|",
    "%Taggy%: [118]|[97]|[108]|",
    "$Request$: [73]|[115]|[105]|[32]|[75]|"]);

messageDecrypter(["3",
"This shouldnt be valid%Taggy%: [118]|[97]|[108]|",
"$tAGged$: [97][97][97]|",
"$Request$: [73]|[115]|[105]|true"]);