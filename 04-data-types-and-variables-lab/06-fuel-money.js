function fuelMoney(distance, passengers, price) {
    let fuel = (distance / 100) * 7;
    fuel += passengers * 0.1;
    let money = fuel * price;
    console.log(`Needed money for that trip is ${money} lv.`);
}

fuelMoney(260, 9, 2.49);
fuelMoney(90, 14, 2.88);