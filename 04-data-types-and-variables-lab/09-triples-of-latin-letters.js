function triplesOfLatinLetters(num) {
    num = Number(num);
    let start = 97;
    let end = start + num;

    for (let i = start; i < end; i++) {
        for (let k = start; k < end; k++) {
            for (let m = start; m < end; m++) {
                let firstLetter = String.fromCharCode(i);
                let secondLetter = String.fromCharCode(k);
                let thirdLetter = String.fromCharCode(m);

                console.log(`${firstLetter}${secondLetter}${thirdLetter}`);
            }
        }
    }
}

triplesOfLatinLetters(3);