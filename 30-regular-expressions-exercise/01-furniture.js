function furniture(input) {
    let pattern = />>(?<name>[A-Za-z]+)<<(?<price>\d+(?:\.\d+)?)!(?<qty>\d+)/;
    let furnitures = [];
    let total = 0;

    while (input[0] !== 'Purchase') {
        let line = input.shift();
        let match = pattern.exec(line);

        if (match !== null) {
            let { name, price, qty } = match.groups;
            
            price = Number(price);
            qty = Number(qty);
            total += price * qty;
            furnitures.push(name);
        }
    }

    console.log('Bought furniture:');

    for (let item of furnitures) {
        console.log(item);
    }

    console.log(`Total money spend: ${total.toFixed(2)}`);
}