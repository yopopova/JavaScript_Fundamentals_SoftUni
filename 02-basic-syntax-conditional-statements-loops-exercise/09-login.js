function login(input) {
    let username = input.shift();
    let pass = username.split("").reverse().join("");
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