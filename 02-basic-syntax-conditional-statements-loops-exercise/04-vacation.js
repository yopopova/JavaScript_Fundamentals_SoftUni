function vacation(n, groupType, day) {
    let price = 0;

    if (groupType === "Students") {

        if (day === "Friday") {
            price = n * 8.45;
        } else if (day === "Saturday") {
            price = n * 9.80;
        } else if (day === "Sunday") {
            price = n * 10.46;
        }

        if (n >= 30) {
            price *= 0.85; // 15% отстъпка от цената по условие.
        }

    } else if (groupType === "Business") {

        if (n >= 100) {
            n -= 10;
        }

        if (day === "Friday") {
            price = n * 10.90;
        } else if (day === "Saturday") {
            price = n * 15.60;
        } else if (day === "Sunday") {
            price = n * 16;
        }

    } else if (groupType === "Regular") {

        if (day === "Friday") {
            price = n * 15;
        } else if (day === "Saturday") {
            price = n * 20;
        } else if (day === "Sunday") {
            price = n * 22.50;
        }

        if (n >= 10 && n <= 20) {
            price *= 0.95;
        }
    }

    console.log(`Total price: ${price.toFixed(2)}`);
}