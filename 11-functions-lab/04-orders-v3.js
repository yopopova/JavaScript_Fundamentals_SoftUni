function orders(product, quantity) {
    let totalPrice = 0;
    let coffeeSum = () => quantity * 1.50;
    let waterSum = () => quantity * 1.00;
    let cokeSum = () => quantity * 1.40;
    let snacksSum = () => quantity * 2.00;

    switch (product) {
        case 'coffee':
            totalPrice = coffeeSum();
            break;
        case 'water':
            totalPrice = waterSum();
            break;
        case 'coke':
            totalPrice = cokeSum();
            break;
        case 'snacks':
            totalPrice = snacksSum();
            break;
    }

    return totalPrice.toFixed(2);
}