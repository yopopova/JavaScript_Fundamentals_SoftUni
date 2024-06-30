function adAstra(input) {
    let text = input[0];
    const calPerDay = 2000;

    let regEx = /(\||#)([A-Za-z ]+)\1(\d{2}\/\d{2}\/\d{2})\1(\d+)\1/g;

    let validMatch;
    let allFood = [];

    while (validMatch = regEx.exec(text)) {
        allFood.push(validMatch); // Here we fill the 'allFood' array and it becomes an array of arrays.
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

adAstra(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|']);
// adAstra(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|']);