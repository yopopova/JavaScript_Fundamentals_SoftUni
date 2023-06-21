function softUniBarIncome(input) {
    let pattern = /%([A-Z][a-z]*)%.*?<(\w+)>.*?\|(\d+)\|.*?(-?\d+(?:\.\d+)?)\$/;
    let total = 0;

    while (input[0] !== 'end of shift') {
        let line = input.shift();

        let match = pattern.exec(line);

        if (match !== null) {
            let [_, name, product, qty, price] = match;
            
            qty = Number(qty);
            price = Number(price);
            let finalPrice = price * qty;
            total += finalPrice;
            console.log(`${name}: ${product} - ${finalPrice.toFixed(2)}`);
        }
    }

    console.log(`Total income: ${total.toFixed(2)}`);
}