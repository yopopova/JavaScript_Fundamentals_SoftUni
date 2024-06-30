function demo() {
    let person = { // This is how an object is created.
        name: 'Yoh',
        age: 30
    }

    if (!person.hasOwnProperty('pet')) {
        // ^ If there is no 'pet' key in the 'person' object
        person.pet = 'Lasi';
        // ^ add such a key and give it this value.

    } else if (person.hasOwnProperty('pet')) {
        // ^ If the 'person' object already has a 'pet' key
        person.pet = 'Buki';
        // ^ change its old value to this one.
    }

    console.log(person);
}

demo();