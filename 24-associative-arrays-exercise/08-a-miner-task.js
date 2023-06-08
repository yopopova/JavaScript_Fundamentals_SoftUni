function aMinerTask(input) {
    let production = new Map();
    let inputL = input.length;

    for (let i = 0; i < inputL - 1; i += 2) {
        let currentProduct = input[i];
        let quantity = Number(input[i + 1]);

        if (!production.has(currentProduct)) {
            production.set(currentProduct, 0);
        }

        let updateQuantity = production.get(currentProduct);
        updateQuantity += quantity;
        production.set(currentProduct, updateQuantity);
    }

    for (let item of production) {
        console.log(`${item[0]} -> ${item[1]}`);
    }
}