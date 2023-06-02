function schoolGrades(input) {
    let schGrades = new Map();

    for (let entry of input) {
        entry = entry.split(' ');
        let name = entry.shift();
        let grades = entry.map(Number);

        if (schGrades.has(name)) {
            let currentGrades = schGrades.get(name);

            for (let grade of grades) {
                currentGrades.push(grade);
            }

            schGrades.set(name, currentGrades);
        } else {
            schGrades.set(name, grades);
        }
    }

    let sortedSchoolGrades = Array.from(schGrades.entries());
    sortedSchoolGrades.sort((a, b) => averageSort(a, b));

    for (let gradesEntry of sortedSchoolGrades) {
        let studentsName = gradesEntry[0];
        let studentGrades = gradesEntry[1];
        console.log(`${studentsName}: ${studentGrades.join(', ')}`);
    }

    function averageSort(a, b) {
        let sumA = 0;
        let sumB = 0;
        let gradesA = a[1];
        let gradesB = b[1];

        gradesA.forEach(ga => sumA += ga);
        gradesB.forEach(gb => sumB += gb);

        let averageA = sumA / gradesA.length;
        let averageB = sumB / gradesB.length;

        return averageA - averageB;
    }
}