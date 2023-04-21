function bonusScoringSystem(input) {
    let studentsCount = Number(input.shift());
    let lecturesCount = Number(input.shift());
    let initialBonus = Number(input.shift());
    let students = input.map(x => Number(x));

    students = students.sort((a, b) => {
        return b - a;
    });

    let maxLectures = students.shift();
    let maxBonus = maxLectures / lecturesCount * (5 + initialBonus);;

    if (maxBonus > 0) {
        console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
        console.log(`The student has attended ${maxLectures} lectures.`);
    } else {
        console.log(`Max Bonus: 0.`);
        console.log(`The student has attended 0 lectures.`);
    }
}