function spiceMustFlow(input) {
    let yieldDay = Number(input);
    let totalAmount = 0;
    let daysCounter = 0;

    while (yieldDay >= 100) {
        totalAmount += yieldDay - 26;
        yieldDay -= 10;
        daysCounter++;
    }

    if (totalAmount !== 0) {
        totalAmount -= 26;
    }

    console.log(`${daysCounter}`);
    console.log(`${totalAmount}`);
}