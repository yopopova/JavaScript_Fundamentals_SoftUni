function demo() {
    let person = {
        name: 'Yoh',
        age: 30,
        pet: { // We can have an object within the object.
            name: 'Lasi',
            type: 'dog'
        }
    }

    let copy = JSON.parse(JSON.stringify(person)); // This is the correct way to copy an object. It's called 'deep copy'.
    person.pet.name = 'Buki';

    console.log('Person:');
    console.log(person.pet.name);
    console.log('Copy of person:');
    console.log(copy.pet.name);
}

demo();