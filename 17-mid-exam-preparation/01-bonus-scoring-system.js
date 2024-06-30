function bonusScoringSystem(input) {
    let studentsCount = Number(input.shift());
    let lecturesCount = Number(input.shift());
    let initialBonus = Number(input.shift());
    let students = input.map(x => Number(x));
    let maxBonus = 0;
    let maxLectures = 0;

    for (let i = 0; i < studentsCount; i++) { // If we don't have students, the for loop won't execute at all, and at the same time we have zeros from the variables that will be printed.
        let currentLectureCount = students[i];
        let currentBonus = currentLectureCount / lecturesCount * (5 + initialBonus);

        if (currentBonus > maxBonus) {
            maxBonus = currentBonus;
            maxLectures = currentLectureCount;
        }
    }

    console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
    console.log(`The student has attended ${maxLectures} lectures.`);
}

bonusScoringSystem(['5', '25', '30', '12', '19', '24', '16', '20']);
bonusScoringSystem(['10', '30', '14', '8', '23', '27', '28', '15', '17', '25', '26', '5', '18']);
bonusScoringSystem(['0', '0', '0']); // Borderline case. Very important!!!