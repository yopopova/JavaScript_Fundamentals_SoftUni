function searchForANumber(collection, numbers) {
    let elementsToCut = numbers[0];
    let elementsToDelete = numbers[1];
    let elementToFind = numbers[2];

    let modifiedArr = collection.slice(0, elementsToCut);
    modifiedArr.splice(0, elementsToDelete);

    let counter = 0;
    let modifiedArrL = modifiedArr.length;

    for (let i = 0; i < modifiedArrL; i++) {
        if (elementToFind === modifiedArr[i]) {
            counter++;
        }
    }

    console.log(`Number ${elementToFind} occurs ${counter} times.`);
}

searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
searchForANumber([7, 1, 5, 8, 2, 7], [3, 1, 5]);