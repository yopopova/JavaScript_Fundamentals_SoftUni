function catalogue(input) {
    let arrProducts = [];
    let firstLetter = '';

    class Catalogue {
        constructor(produtName, productPrice) {
            this.productName = produtName,
            this.productPrice = productPrice
        }
    }

    for (let line of input) {
        let [productName, productPrice] = line.split(' : ');
        arrProducts.push(new Catalogue(productName, productPrice));
    }

    let sortedArrProducts = arrProducts.sort((a, b) => a.productName.localeCompare(b.productName));

    sortedArrProducts.map(el => {
        if (el.productName[0] !== firstLetter) {
            console.log(el.productName[0]);
            console.log(`  ${el.productName}: ${el.productPrice}`);
            firstLetter = el.productName[0];
        } else {
            console.log(`  ${el.productName}: ${el.productPrice}`);
        }
    });
}

// catalogue([
//     'Appricot : 20.4',
//     'Fridge : 1500',
//     'TV : 1499',
//     'Deodorant : 10',
//     'Boiler : 300',
//     'Apple : 1.25',
//     'Anti-Bug Spray : 15',
//     'T-Shirt : 10'
// ]);

catalogue([
    'Omlet : 5.4',
    'Shirt : 15',
    'Cake : 59'
]);