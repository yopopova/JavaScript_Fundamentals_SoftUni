function orders(product, quantity) {
    let totalPrice = 0;

    if (product === 'coffee') {
        totalPrice += 1.50 * quantity;
    } else if (product === 'water') {
        totalPrice += 1.00 * quantity;
    } else if (product === 'coke') {
        totalPrice += 1.40 * quantity;
    } else if (product === 'snacks') {
        totalPrice += 2.00 * quantity;
    }

    return totalPrice.toFixed(2);
}