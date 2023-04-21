function bonusScoringSystem(input) {
    let studentsCount = Number(input.shift());
    let lecturesCount = Number(input.shift());
    let initialBonus = Number(input.shift());
    let students = input.map(x => Number(x));
    let maxBonus = 0;
    let maxLectures = 0;

    for (let i = 0; i < studentsCount; i++) {
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