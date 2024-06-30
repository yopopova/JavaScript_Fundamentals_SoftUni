function demo() {
    let person = { // This is how an object is created.
        name: 'Yoh',
        age: 30,
        pet: 'dog',
        gender: 'female'
    }

    delete person.pet; // This way we delete the key and its value from the object.

    console.log(person);
}

demo();