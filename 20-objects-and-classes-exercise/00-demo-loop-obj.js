function demo() {
    let person = {
        name: 'Yoh',
        age: 30
    }

    // With 'for of' we CANNOT iterate over an object!!!
    // Only with 'for in' we can access the keys and their values ​​in an object.

    for (let singleName in person) {
        console.log(singleName); // This is how we access the keys in an object.
    }

    for (let singleName in person) {
        console.log(person[singleName]); // This is how we access the key values ​​in an object.
    }
}

demo();