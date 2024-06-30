function softUniBarIncome(input) {
    let pattern = /%([A-Z][a-z]*)%.*?<(\w+)>.*?\|(\d+)\|.*?(-?\d+(?:\.\d+)?)\$/;
    let total = 0;

    while (input[0] !== 'end of shift') {
        let line = input.shift();

        let match = pattern.exec(line); // This is how we execute the RegEx for each row.

        if (match !== null) {
            let [_, name, product, qty, price] = match;
            // Here we write '_' because in this case the array starts with the whole line.
            
            qty = Number(qty);
            price = Number(price);
            let finalPrice = price * qty;
            total += finalPrice;
            console.log(`${name}: ${product} - ${finalPrice.toFixed(2)}`);
        }
    }

    console.log(`Total income: ${total.toFixed(2)}`);
}

softUniBarIncome(['%George%<Croissant>|2|10.3$', '%Peter%<Gum>|1|1.3$', '%Maria%<Cola>|1|2.4$', 'end of shift']);