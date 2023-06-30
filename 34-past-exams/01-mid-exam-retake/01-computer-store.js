function computerStore(input) {
    let index = 0;
    let command = input[index];
    index++;

    let sum = 0;

    while (command !== 'special' && command !== 'regular') {
        let price = Number(command);

        if (price === 0) {
            sum -= price;
            console.log('Invalid order!');
        } else if (price < 0) {
            sum -= price;
            console.log('Invalid price!');
        }

        sum += price;

        command = input[index];
        index++;
    }

    let taxes = sum - (sum * 0.8);
    let totalPrice = sum + taxes;

    if (command === 'special') {
        if (sum > 0) {
            totalPrice *= 0.9;
            console.log("Congratulations you've just bought a new computer!");
            console.log(`Price without taxes: ${sum.toFixed(2)}$`);
            console.log(`Taxes: ${taxes.toFixed(2)}$`);
            console.log("-----------");
            console.log(`Total price: ${totalPrice.toFixed(2)}$`);
        } else {
            console.log('Invalid order!');
        }

    } else if (command === 'regular') {
        if (sum > 0) {
            console.log("Congratulations you've just bought a new computer!");
            console.log(`Price without taxes: ${sum.toFixed(2)}$`);
            console.log(`Taxes: ${taxes.toFixed(2)}$`);
            console.log("-----------");
            console.log(`Total price: ${totalPrice.toFixed(2)}$`);
        } else {
            console.log('Invalid order!');
        }
    }
}