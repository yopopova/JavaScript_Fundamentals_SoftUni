function registration(input) {
    let n = input.shift();
    let regEx = /(U\$)([A-Z][a-z]{2,})(\1)(P@\$)([a-zA-Z]{5,}\d+)(P@\$)/g;
    let nameRegEx = /[A-Z][a-z]{2,}/g;
    let passRegEx = /[a-zA-Z]{5,}\d+/g;
    let registrationsCount = 0;

    for (let i = 0; i < n; i++) {
        let currentLine = input[i];

        if (!regEx.test(currentLine)) {
            console.log('Invalid username or password');
        } else {
            console.log('Registration was successful');
            registrationsCount++;

            let name = currentLine.match(nameRegEx);
            let pass = currentLine.match(passRegEx);
            console.log(`Username: ${name}, Password: ${pass}`);
        }
    }

    console.log(`Successful registrations: ${registrationsCount}`);
}