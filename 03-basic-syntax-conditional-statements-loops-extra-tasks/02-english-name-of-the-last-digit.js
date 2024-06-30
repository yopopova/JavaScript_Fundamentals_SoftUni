function englishNameOfTheLastDigit(n) {
    if(n % 10 === 0) {
        console.log("zero");
    } else if(n % 10 === 1) {
        console.log("one");
    } else if(n % 10 === 2) {
        console.log("two");
    } else if(n % 10 === 3) {
        console.log("three");
    } else if(n % 10 === 4) {
        console.log("four");
    } else if(n % 10 === 5) {
        console.log("five");
    } else if(n % 10 === 6) {
        console.log("six");
    } else if(n % 10 === 7) {
        console.log("seven");
    } else if(n % 10 === 8) {
        console.log("eight");
    } else if(n % 10 === 9) {
        console.log("nine");
    }
}

englishNameOfTheLastDigit(512);
englishNameOfTheLastDigit(1);
englishNameOfTheLastDigit(1643);