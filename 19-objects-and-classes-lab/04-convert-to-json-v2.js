function convertToJSON(fName, lName, colorOfHear) {
    class PersonInfo {
        constructor(firsName, lastName, hairColor) {
            this.name = firsName,
            this.lastName = lastName,
            this.hairColor = hairColor
        }
    }

    let person = new PersonInfo(fName, lName, colorOfHear);
    console.log(JSON.stringify(person));
}