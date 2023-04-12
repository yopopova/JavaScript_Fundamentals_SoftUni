function listOfProducts(input) {
    let arr = input
    .slice()
    .sort()
    .map((el, i) => console.log(`${i + 1}.${el}`));
}