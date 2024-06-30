function companyUsers(input) {
    let listOfCompanies = {};

    for (let item of input) {
        let [company, number] = item.split(' -> ');

        if (!listOfCompanies.hasOwnProperty(company)) {
            listOfCompanies[company] = [];
        }

        if (!listOfCompanies[company].includes(number)) {
            listOfCompanies[company].push(number); // Add the 'id' of the employee if not contained in the array.
        }
    }

    let sortedCompanies = Object.keys(listOfCompanies);
    sortedCompanies.sort((a, b) => a.localeCompare(b));

    for (let company of sortedCompanies) {
        console.log(company);

        for (let id of listOfCompanies[company]) {
            console.log(`-- ${id}`);
        }
    }
}

companyUsers(['SoftUni -> AA12345', 'SoftUni -> BB12345', 'Microsoft -> CC12345', 'HP -> BB12345']);