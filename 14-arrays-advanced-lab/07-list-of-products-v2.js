function listOfProducts(input) {
    let arr = input
    .slice()
    .sort((a, b) => a.localeCompare(b))
    .map((el, i) => console.log(`${i + 1}.${el}`));
}

listOfProducts(["Potatoes", "Tomatoes", "Onions", "Apples"]);
// listOfProducts(['Watermelon', 'Banana', 'Apples']);
// listOfProducts([]);