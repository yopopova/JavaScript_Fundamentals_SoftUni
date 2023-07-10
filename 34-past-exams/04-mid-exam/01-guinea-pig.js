function guineaPig(input) {
    let foodKg = Number(input[0]);
    let hayKg = Number(input[1]);
    let coverKg = Number(input[2]);
    let pigWeight = Number(input[3]);

    const grams = 1000;
    const dayFood = 300;
    let daysCounter = 0;

    let food = foodKg * grams;
    let hay = hayKg * grams;
    let cover = coverKg * grams;
    let weight = pigWeight * grams;

    for (let i = 1; i <= 30; i++) {
        daysCounter++;
        food -= dayFood;

        if (daysCounter % 2 === 0) {
            hay -= food * 0.05;
        }

        if (daysCounter % 3 === 0) {
            cover -= weight / 3;
        }

        if (food <= 0 || hay <= 0 || cover <= 0) {
            console.log("Merry must go to the pet store!");
            break;
        }
    }

    if (food > 0 && hay > 0 && cover > 0) {
        food /= grams;
        hay /= grams;
        cover /= grams;
        console.log(`Everything is fine! Puppy is happy! Food: ${food.toFixed(2)}, Hay: ${hay.toFixed(2)}, Cover: ${cover.toFixed(2)}.`);
    }
}