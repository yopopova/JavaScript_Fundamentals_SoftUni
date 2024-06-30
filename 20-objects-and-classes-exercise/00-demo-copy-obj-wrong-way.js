function demo() {
    let person = {
        name: 'Yoh',
        age: 30
    }

    let copy = person; // Wrong way to copy an object.
    person.age = 31;

    console.log('Person:');
    console.log(person);
    console.log('Copy of person:');
    console.log(copy);
}

demo();