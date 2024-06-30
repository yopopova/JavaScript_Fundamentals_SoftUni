function furniture(input) {
    let pattern = />>(?<name>[A-Za-z]+)<<(?<price>\d+(?:\.\d+)?)!(?<qty>\d+)/;
    let furnitures = [];
    let total = 0;

    while (input[0] !== 'Purchase') {
        let line = input.shift();
        let match = pattern.exec(line);

        if (match !== null) {
            let { name, price, qty } = match.groups; // Destruct an object. Searches for properties with the same names and saves their values.
            // ^ If we don't type '.groups', nothing will come out. It will output 'undefined' and 'NaN'.
            
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

furniture(['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase']);