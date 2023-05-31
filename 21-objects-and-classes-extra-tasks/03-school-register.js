function schoolRegister(input) {
    let schoolRegister = {};

    for (let el of input) {
        let [partOne, partTwo, partThree] = el.split(', ');
        let [nameText, studentName] = partOne.split(': ');
        let [gradeText, grade] = partTwo.split(': ');
        let [scoreText, score] = partThree.split(': ');
        grade = Number(grade) + 1;
        score = Number(score);

        if (score >= 3) {
            let student = { studentName, score };

            if (!schoolRegister.hasOwnProperty(grade)) {
                schoolRegister[grade] = [];
            }

            schoolRegister[grade].push(student);
        }
    }

    let sortedRegister = Object.keys(schoolRegister).sort((a, b) => a - b);

    for (let grade of sortedRegister) {
        let listOfStudents = schoolRegister[grade];
        console.log(`${grade} Grade`);
        console.log(`List of students: ${listOfStudents.map(el => el.studentName).join(', ')}`);
        console.log(`Average annual score from last year: ${averageScore(listOfStudents.map(el => el.score)).toFixed(2)}`);
        console.log();
    }

    function averageScore(arr) {
        return arr.reduce((a, b) => a + b, 0) / arr.length;
    }
}