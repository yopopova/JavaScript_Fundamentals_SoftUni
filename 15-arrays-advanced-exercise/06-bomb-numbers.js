function bombNumbers(sequence, bomb) {
    let specialNum = bomb[0];
    let bombPower = bomb[1];

    while (sequence.includes(specialNum)) {
        let index = sequence.indexOf(specialNum);
        let elementsToRemove = bombPower * 2 + 1;
        // ^ We multiply the power of the bomb * 2 because we will be removing elements from both sides of specialNum.
        // ^ Finally we add 1 to remove the specialNum itself.

        let startIndex = index - bombPower;
        // ^ To find at which index to start removing the numbers.
        
        if (startIndex < 0) {
            elementsToRemove += startIndex;
            startIndex = 0;
        }

        sequence.splice(startIndex, elementsToRemove);
    }

    let finalResult = sequence.reduce((a, b) => {
        return a + b; // Add each with each number to get the sum of all elements in the array. As we do with a for loop.
    }, 0);

    console.log(finalResult);
}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);
bombNumbers([1, 7, 7, 1, 2, 3], [7, 1]);
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);