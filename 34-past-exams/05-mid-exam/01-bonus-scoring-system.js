function bonusScoringSystem(input) {
    let students = Number(input[0]);
    let lectures = Number(input[1]);
    let bonus = Number(input[2]);

    let maxBonus = 0;
    let maxAttendances = 0;
    let inputL = input.length;

    for (let i = 3; i < inputL; i++) {
        let currentAttendances = Number(input[i]);

        if (currentAttendances > maxAttendances) {
            maxAttendances = currentAttendances;
        }

        let totalBonus = currentAttendances / lectures * (5 + bonus);

        if (totalBonus > maxBonus) {
            maxBonus = totalBonus;
        }
    }

    console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
    console.log(`The student has attended ${maxAttendances} lectures.`);
}