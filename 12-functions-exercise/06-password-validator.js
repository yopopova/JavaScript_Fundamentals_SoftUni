function passwordValidator(pass) {

    function passLength(str) {
        if (str.length >= 6 && str.length <= 10) {
            return '';
        } else {
            return 'Password must be between 6 and 10 characters\n';
        }
    }

    function onlyLettersAndDigits(str) {
        let isLetterOrDigit = true;

        for (let char of str) {
            let code = char.charCodeAt();

            if (code < 48 || code > 57 && code < 65 || code > 90 && code < 97 || code > 122) {
                isLetterOrDigit = false;
            }
        }

        return isLetterOrDigit ? '' : 'Password must consist only of letters and digits\n';
    }

    function twoDigits(str) {
        let counter = 0;

        for (let char of str) {
            let code = char.charCodeAt();

            if (code >= 48 && code <= 57) {
                counter++;
            }
        }

        if (counter >= 2) {
            return '';
        } else {
            return 'Password must have at least 2 digits\n';
        }
    }

    let result = '';
    result = passLength(pass) + onlyLettersAndDigits(pass) + twoDigits(pass);
    return result ? result : 'Password is valid';
}