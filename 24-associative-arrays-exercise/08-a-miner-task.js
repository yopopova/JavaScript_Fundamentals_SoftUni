function aMinerTask(input) {
    let production = new Map();
    let inputL = input.length;

    for (let i = 0; i < inputL - 1; i += 2) {
        // ^ Round to inputL - 1 so we don't exit the array.

        let currentProduct = input[i];
        let quantity = Number(input[i + 1]); // To loop through an element.

        if (!production.has(currentProduct)) {
            production.set(currentProduct, 0); // We set a key and an initial value which is 0.
        }

        let updateQuantity = production.get(currentProduct);
        updateQuantity += quantity;
        production.set(currentProduct, updateQuantity);
    }

    for (let item of production) {
        console.log(`${item[0]} -> ${item[1]}`);
    }
}

aMinerTask(['Gold', '155', 'Silver', '10', 'Copper', '17']);
// aMinerTask(['gold', '155', 'silver', '10', 'copper', '17', 'gold', '15']);