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

    if (maxBonus > 0) { // We write this check, because of the input with zeros.
        console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
        console.log(`The student has attended ${maxLectures} lectures.`);
    } else {
        console.log(`Max Bonus: 0.`);
        console.log(`The student has attended 0 lectures.`);
    }
}

bonusScoringSystem(['5', '25', '30', '12', '19', '24', '16', '20']);
bonusScoringSystem(['10', '30', '14', '8', '23', '27', '28', '15', '17', '25', '26', '5', '18']);
bonusScoringSystem(['0', '0', '0']); // Borderline case. Very important!!!