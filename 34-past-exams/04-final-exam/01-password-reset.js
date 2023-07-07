function passwordReset(input) {
    let pass = input.shift();
    let doneCommand = input.pop();
    let inputL = input.length;

    for (let i = 0; i < inputL; i++) {
        let [command, elOne, elTwo] = input[i].split(' ');

        if (command === 'TakeOdd') {
            let passArr = pass.split('');
            let passArrL = passArr.length;
            let newPass = [];

            for (let k = 0; k < passArrL; k++) {
                let char = passArr[k];

                if (k % 2 !== 0) {
                    newPass.push(char);
                }
            }

            pass = newPass.join('');
            console.log(pass);

        } else if (command === 'Cut') {
            let index = Number(elOne);
            let l = Number(elTwo);

            let firstPart = pass.substring(0, index);
            let secondPart = pass.substring(index + l);

            let cuttedPass = firstPart.concat(secondPart);
            pass = cuttedPass;
            console.log(pass);

        } else if (command === 'Substitute') {
            let subStr = elOne;
            let subst = elTwo;

            if (pass.includes(subStr)) {
                pass = pass.split(subStr).join(subst);
                console.log(pass);
            } else {
                console.log('Nothing to replace!');
            }
        }
    }

    console.log(`Your password is: ${pass}`);
}