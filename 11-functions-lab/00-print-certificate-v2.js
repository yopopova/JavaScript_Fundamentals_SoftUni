function printCertificate(grade, names) {
    let fullName = getFullName(names[0], names[1]);
    // console.log(fullName);

    if (grade < 3) {
        console.log(`${fullName} does not qualify`); // We print this, if the student is not passed the exam.
    } else {
        printHeader();
        console.log(fullName);
        console.log(formatGrade(grade)); // We use 'console.log()' here, because 'formatGrade' function contains 'return'.
    }
}

printCertificate(5.25, ['Peter', 'Carter']);
printCertificate(2, ['John', 'Doe']);

function printHeader() { // Don't return value, just print something.
    console.log('~~~-   {@}   -~~~');
    console.log('~- Certificate -~');
    console.log('~~~-  ~---~  -~~~');
}

function getFullName(firstName, lastName) { // Here we return value (the name).
    return firstName + " " + lastName;
}

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