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

    cats.forEach(c => c.meow());
}