function convertToJSON(name, lastName, hairColor) {
    // ^ We set the names already in the function and then directly put them in the object,
    // thus saving us writing them with ':'. This is the easiest way
    // to create an object by filling the data already in the function.

    let obj = {
        name,
        lastName,
        hairColor
    }

    let output = JSON.stringify(obj);
    console.log(output);
}

convertToJSON('George', 'Jones', 'Brown');
convertToJSON('Peter', 'Smith', 'Blond');