function poundsToDollars(input) {
    let pounds = Number(input);
    const currency = 1.31;
    let dollars = pounds * currency;
    console.log(dollars.toFixed(3));
}

poundsToDollars(80);
poundsToDollars(39);