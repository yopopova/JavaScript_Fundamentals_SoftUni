function adAstra(input) {
    let text = input[0];
    const calPerDay = 2000;

    let regEx = /(\||#)([A-Za-z ]+)\1(\d{2}\/\d{2}\/\d{2})\1(\d+)\1/g;

    let validMatch;
    let allFood = [];

    while (validMatch = regEx.exec(text)) {
        allFood.push(validMatch);
    }

    let totalCalories = 0;

    for (let line of allFood) {
        let currentCalories = Number(line[4]);
        totalCalories += currentCalories;
    }

    let foodForAllDays = totalCalories / calPerDay;
    console.log(`You have food to last you for: ${Math.floor(foodForAllDays)} days!`);

    for (let items of allFood) {
        let product = items[2];
        let dueDate = items[3];
        let productCals = items[4];

        console.log(`Item: ${product}, Best before: ${dueDate}, Nutrition: ${productCals}`);
    }
}