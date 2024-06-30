function personInfo(fName, lName, num) {
    let person = {
        firstName: fName, // person's firstName + : + fName as the name of a variable that has a value
        lastName: lName,
        age: num
    };

    return person;
}

console.log(personInfo("Peter", "Pan", "20"));