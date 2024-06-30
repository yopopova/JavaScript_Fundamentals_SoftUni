function schoolGrades(input) {
    let schGrades = new Map();

    for (let entry of input) {
        entry = entry.split(' ');
        let name = entry.shift();
        let grades = entry.map(Number);

        if (schGrades.has(name)) {
            let currentGrades = schGrades.get(name); // Get the current ratings.

            for (let grade of grades) {
                currentGrades.push(grade); // Add the new grades one by one to the old ones.
            }

            schGrades.set(name, currentGrades); // Then we return the scores.
        } else {
            schGrades.set(name, grades); // Here we directly add name and ratings if the above condition is not met.
        }
    }

    let sortedSchoolGrades = Array.from(schGrades.entries()); // Convert Map() to an array so we can iterate.
    sortedSchoolGrades.sort((a, b) => averageSort(a, b));

    for (let gradesEntry of sortedSchoolGrades) {
        let studentsName = gradesEntry[0];
        let studentGrades = gradesEntry[1]; // Here the value is an array.
        console.log(`${studentsName}: ${studentGrades.join(', ')}`);
    }

    function averageSort(a, b) { // We have two items from this Map().
        // We only need the GPA of each student to sort the students by average score.

        let sumA = 0; // We do a sum.
        let sumB = 0; // We do a sum.
        let gradesA = a[1]; // Get the grades.
        let gradesB = b[1]; // Get the grades.

        gradesA.forEach(ga => sumA += ga); // We loop through all the scores and add them up.
        gradesB.forEach(gb => sumB += gb); // We loop through all the scores and add them up.

        let averageA = sumA / gradesA.length;
        let averageB = sumB / gradesB.length;

        return averageA - averageB;
    }
}

schoolGrades(['Lilly 4 6 6 5', 'Tim 5 6', 'Tammy 2 4 3', 'Tim 6 6']);