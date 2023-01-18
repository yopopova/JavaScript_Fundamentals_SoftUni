function leapYear(n) {
    let isLeap = n % 4 === 0 && n % 100 !== 0 || n % 400 === 0;

    let result = isLeap ? "yes" : "no";
    console.log(result);
}