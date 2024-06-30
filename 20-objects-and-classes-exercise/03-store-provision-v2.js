function storeProvision(currentStocks, forDelivery) {
    let storeProducts = {};
    let currentStocksL = currentStocks.length;
    let forDeliveryL = forDelivery.length;

    for (let i = 0; i < currentStocksL; i += 2) {
        let product = currentStocks[i]; // 'product' is our key in the object
        storeProducts[product] = Number(currentStocks[i + 1]); // [product] = currentStocks[i + 1]; -> this is how we add a key value in the object
    }

    for (let i = 0; i < forDeliveryL; i += 2) {
        let product = forDelivery[i];

        if (!storeProducts.hasOwnProperty(product)) {
            storeProducts[product] = 0; // add the product with value 0.
        }

        storeProducts[product] += Number(forDelivery[i + 1]);
        // Here we update the product value a.k.a
        // since we set the value to 0 above, if we have the product we'll just add its values,
        // if we don't have the product we'll just add its current value.

        // for (let product in storeProducts) {
        //     console.log(`${product} -> ${storeProducts[product]}`);
        // }

        // The bottom lines are an example of how we can sort (in this case count):
    }

    let entries = Object.entries(storeProducts).sort((a, b) => { // entries return an array of arrays, so on the bottom line
        return a[1] - b[1]; // in [] we write 1 to sort by quantity. At index 0 is the product, and at index 1 - its quantity.
    });

    entries.forEach(el => {
        console.log(el);
    });
}