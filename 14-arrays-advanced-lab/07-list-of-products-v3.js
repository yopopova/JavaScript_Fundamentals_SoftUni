function listOfProducts(input) {
    let arr = input
    .slice()
    .sort()
    .map((el, i) => console.log(`${i + 1}.${el}`));
}

listOfProducts(["Potatoes", "Tomatoes", "Onions", "Apples"]);
// listOfProducts(['Watermelon', 'Banana', 'Apples']);
// listOfProducts([]);