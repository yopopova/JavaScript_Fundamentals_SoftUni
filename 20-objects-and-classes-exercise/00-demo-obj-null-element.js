function demo() {
    let person = { // This is how an object is created.
        name: 'Yoh',
        age: 30,
        pet: 'dog',
        gender: 'female'
    }

    person.pet = null; // This way we reset the 'pet' key value in the 'person' object.
    // ^ The 'pet' key still exists and has a value, but it is 'null'.

    console.log(person);
}

demo();