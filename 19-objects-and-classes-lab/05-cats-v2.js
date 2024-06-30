function catsCreator(array) { // We get an array as input to the function.
    class Cat { // Create a 'Cat' class.
        constructor(name, age) { // In the construct we pass 2 parameters: name and age.
            this.name = name,
            this.age = age,
            this.meow = () => { // Create a function in which to print the message.
                console.log(`${this.name}, age ${this.age} says Meow`);
            }
        }
    }

    let cats = [];

    for (let currentString of array) { // Create a loop to iterate over everything from the array.
        let currentData = currentString.split(' '); // This is how we split the elements in the array.
        let currentCat = new Cat(currentData[0], currentData[1]); // We call the elements: the cat's name and its age.
        cats.push(currentCat); // Put everything in the new array.
    }

    // cats.forEach(c => c.meow()); // forEach: for each element in the array, apply the function in the parentheses

    for (let c of cats) { // Instead of forEach, we can also use for of
        c.meow();
    }
}

catsCreator(['Mellow 2', 'Tom 5']);
catsCreator(['Candy 1', 'Poppy 3', 'Nyx 2']);