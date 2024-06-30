function demo() {
    let person = {
        name: 'Yoh',
        age: 30,
        pet: { // We can have an object within the object.
            name: 'Lasi',
            type: 'dog'
        },
        run: function() {
            return 'Running!';
        }

        // ^ We can have a function in the object. A function written inside an object is called a method of the object.
    }

    console.log(person.run());
}

demo();