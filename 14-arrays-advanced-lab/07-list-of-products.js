function listOfProducts(input) {

    let sortedInput = input.sort((a, b) => {
        return a.localeCompare(b);
    });

    let arrL = sortedInput.length;

    for (let i = 0; i < arrL; i++) {
        console.log(`${i + 1}.${sortedInput[i]}`);
    }
}