function personInfo(fName, lName, personAge) {
    class personalInfo {
        constructor(firstName, lastName, age) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
        }
    }

    let person = new personalInfo(fName, lName, personAge);
    return person;
}

console.log(personInfo("Peter", "Pan", "20"));