function phoneBook(arr) {
    let fullPhoneBook = [];

    class Person {
        constructor(name, phone) {
            this.name = name,
            this.phone = phone
        }
    }

    for (let line of arr) {
        let [personName, personPhone] = line.split(' ');
        let personInfo = new Person(personName, personPhone);

        if (fullPhoneBook.find(el => el.name === personName)) {
            fullPhoneBook.find(el => el.phone = personPhone);
        } else {
            fullPhoneBook.push(personInfo);
        }
    }

    fullPhoneBook.forEach(el => console.log(`${el.name} -> ${el.phone}`));
}