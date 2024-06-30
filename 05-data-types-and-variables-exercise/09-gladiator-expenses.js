function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let shieldCounter = 0;
    let finalPrice = 0;

    for (let i = 1; i <= lostFights; i++) {
        if (i % 2 === 0) {
            finalPrice += helmetPrice;
        }

        if (i % 3 === 0) {
            finalPrice += swordPrice;
        }

        if (i % 2 === 0 && i % 3 === 0) {
            finalPrice += shieldPrice;
            shieldCounter++;
        }

        if (shieldCounter % 2 === 0 && shieldCounter > 0) {
            finalPrice += armorPrice;
            shieldCounter = 0;
        }
    }

    console.log(`Gladiator expenses: ${finalPrice.toFixed(2)} aureus`);
}

gladiatorExpenses(7, 2, 3, 4, 5);
gladiatorExpenses(23, 12.50, 21.50, 40, 200);