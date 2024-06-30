function login(input) {
    let username = input.shift(); // Subtract the first element from the array. This is how we change the length of the array.
    // ^ If we use the old let username = input[0] method, we just take the first element, but don't pop it out or change the length of the array.

    let pass = username.split("").reverse().join(""); // Methods can be chained to each other and executed.
    let inputL = input.length;

    for (let i = 0; i < inputL; i++) {

        if (i >= 3) {
            console.log(`User ${username} blocked!`);
            break;
        }

        if (input[i] === pass) {
            console.log(`User ${username} logged in.`);
        } else {
            console.log("Incorrect password. Try again.");
        }
    }
}

login(['Acer', 'login', 'go', 'let me in', 'recA']);
// login(['momo','omom']);
// login(['sunny','rainy','cloudy','sunny','not sunny']);