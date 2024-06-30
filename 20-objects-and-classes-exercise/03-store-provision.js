function storeProvision(currentStocks, forDelivery) {
    let storeProducts = {};
    let currentStocksL = currentStocks.length;
    let forDeliveryL = forDelivery.length;

    for (let i = 0; i < currentStocksL; i += 2) {
        let product = currentStocks[i]; // 'product' is our key in the object
        storeProducts[product] = Number(currentStocks[i + 1]); // [product] = currentStocks[i + 1]; -> this is how we add a key value in the object
    }

    // console.log(storeProducts);

    for (let i = 0; i < forDeliveryL; i += 2) {
        let product = forDelivery[i];

        if (!storeProducts.hasOwnProperty(product)) {
            storeProducts[product] = 0; // add the product with value 0.
        }

        storeProducts[product] += Number(forDelivery[i + 1]); // Here we update the product value.
    }

    for (let product in storeProducts) {
        console.log(`${product} -> ${storeProducts[product]}`);
    }
}

storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'], ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);
// storeProvision(['Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'], ['Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30']);