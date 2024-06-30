function thePyramidOfKingDjoser(base, increment) {
    base = Number(base);
    increment = Number(increment);

    let pyramidSteps = 0;

    let stone = 0;
    let marble = 0;
    let lapisLazuli = 0;
    let gold = 0;

    while (base > 1) {
        let wholeBase = (base * base) * increment;
        let innerBase = ((base - 2) * (base - 2)) * increment;
        let outerBase = wholeBase - innerBase;

        if (base - 2 === 0) {
            break;
        }

        pyramidSteps++;
        base -= 2;

        if (pyramidSteps % 5 === 0) {
            lapisLazuli += outerBase;
            stone += innerBase;
        } else {
            marble += outerBase;
            stone += innerBase;
        }
    }

    pyramidSteps++; // We raise by another 1, because of the step with the gold.
    let pyramidHeight = pyramidSteps * increment;
    gold += (base * base) * increment;

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(pyramidHeight)}`);
}

// thePyramidOfKingDjoser(11, 1);
// thePyramidOfKingDjoser(11, 0.75);
// thePyramidOfKingDjoser(12, 1);
thePyramidOfKingDjoser(23, 0.5);