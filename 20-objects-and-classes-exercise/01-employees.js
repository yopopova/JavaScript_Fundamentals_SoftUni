function employees(input) {
    for (let singleName of input) {
        let singlePerson = {
            name: singleName,
            personalNum: singleName.length
        }

        console.log(`Name: ${singlePerson.name} -- Personal Number: ${singlePerson.personalNum}`);
    }
}