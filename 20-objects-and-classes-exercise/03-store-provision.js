function storeProvision(currentStocks, forDelivery) {
    let storeProducts = {};
    let currentStocksL = currentStocks.length;
    let forDeliveryL = forDelivery.length;

    for (let i = 0; i < currentStocksL; i += 2) {
        let product = currentStocks[i];
        storeProducts[product] = Number(currentStocks[i + 1]);
    }

    for (let i = 0; i < forDeliveryL; i += 2) {
        let product = forDelivery[i];

        if (!storeProducts.hasOwnProperty(product)) {
            storeProducts[product] = 0;
        }

        storeProducts[product] += Number(forDelivery[i + 1]);
    }

    for (let product in storeProducts) {
        console.log(`${product} -> ${storeProducts[product]}`);
    }
}