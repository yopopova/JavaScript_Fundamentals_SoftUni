function formatGrade(grade) {
    if (grade < 3) {
        return 'Fail (2)';
    } else if (grade < 3.50) {
        return `Poor (${grade.toFixed(2)})`;
    } else if (grade < 4.50) {
        return `Good (${grade.toFixed(2)})`;
    } else if (grade < 5.50) {
        return `Very good (${grade.toFixed(2)})`;
    } else {
        return `Excellent (${grade.toFixed(2)})`;
    }
}

function pass(grade) {
    return grade >= 3; // If we have 3 or more means that we have passed the exam.
}

function printHeader() { // Don't return result, just print something.
    console.log('~~~-   {@}   -~~~');
    console.log('~- Certificate -~');
    console.log('~~~-  ~---~  -~~~');
}

function printName(arr) {
    console.log(`${arr[0]} ${arr[1]}`);
}

function printCertificate(grade, nameArr) {
    if(pass(grade)) { // We invoke the 'pass' function. Will return 'true' or 'false'.
        printHeader(); // We print the 'printHeader' function.
        printName(nameArr); // We print the 'printName' function.
        console.log(formatGrade(grade)); // We print the 'formatGrade' function with the 'grade' result.
    } else {
        console.log(`${nameArr[0]} ${nameArr[1]} does not qualify`); // We print this if the student is not passed the exam.
    }
}

printCertificate(5.25, ['Peter', 'Carter']);
printCertificate(2, ['Peter', 'Carter']);