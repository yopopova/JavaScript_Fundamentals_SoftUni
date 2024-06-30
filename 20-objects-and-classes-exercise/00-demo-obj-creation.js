function demo() {
    let person = { // This is how an object is created.
        name: 'Yoh', // A variable written inside an object is called a property of the object.
        age: 30
    }

    person.pet = 'dog'; // This is how we add stuff to the object.
    person['gender'] = 'female';
    // ^ These are the two ways to add a key and value to an object.

    person.age = 31; // This is how we overwrite a value to a given object key.

    console.log(person);
}

demo();