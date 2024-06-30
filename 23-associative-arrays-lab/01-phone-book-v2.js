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

phoneBook(['Tim 0834212554', 'Peter 0877547887', 'Bill 0896543112', 'Tim 0876566344']);
phoneBook(['George 0552554', 'Peter 087587', 'George 0453112', 'Bill 0845344']);