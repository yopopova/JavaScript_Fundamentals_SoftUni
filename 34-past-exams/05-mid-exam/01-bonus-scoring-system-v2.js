function bonusScoringSystem(input) {
    let students = Number(input.shift());
    let lectures = Number(input.shift());
    let bonus = Number(input.shift());

    let maxBonus = 0;
    let maxAttendances = 0;

    for (let i = 0; i < students; i++) {
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