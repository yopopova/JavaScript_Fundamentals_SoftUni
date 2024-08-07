function SoftUniReception(input) {
    let allStudents = Number(input[input.length - 1]);
    let studentsPerHour = 0;
    let hours = 0;

    for (let i = 0; i < 3; i++) {
        let students = Number(input[i]);
        studentsPerHour += students;
    }

    while (allStudents > 0) {
        allStudents -= studentsPerHour;
        hours++;

        if (hours % 4 === 0) {
            hours++;
        }
    }

    console.log(`Time needed: ${hours}h.`);
}

SoftUniReception(['5', '6', '4', '20']);
SoftUniReception(['1', '2', '3', '45']);
SoftUniReception(['3', '2', '5', '40']);