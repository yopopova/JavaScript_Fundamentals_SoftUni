function mathPower(num, power) {
    let result = 1; // We start at 1, because if we start at 0, the multiplication will return 0 each result.

    for (let i = 0; i < power; i++) {
        result *= num;
    }

    console.log(result);
}

mathPower(2, 8);
mathPower(3, 4);