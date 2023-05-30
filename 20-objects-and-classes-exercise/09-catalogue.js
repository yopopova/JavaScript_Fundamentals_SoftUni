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