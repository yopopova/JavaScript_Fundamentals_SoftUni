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

    for (let line of array) {
        let [catName, catAge] = line.split(' ');
        cats.push(new Cat(catName, catAge));
    }

    cats.forEach(c => c.meow());
}

catsCreator(['Mellow 2', 'Tom 5']);
catsCreator(['Candy 1', 'Poppy 3', 'Nyx 2']);