function catsCreator(array) {
    class Cat {
        constructor(name, age) {
            this.name = name,
            this.age = age,
            this.meow = () => {
                console.log(`${this.name}, age ${this.age} says Meow`);
            }
        }
    }

    let cats = [];

    for (let currentString of array) {
        let currentData = currentString.split(' ');
        let currentCat = new Cat(currentData[0], currentData[1]);
        cats.push(currentCat);
    }

    cats.map(c => c.meow());
}

catsCreator(['Mellow 2', 'Tom 5']);
catsCreator(['Candy 1', 'Poppy 3', 'Nyx 2']);