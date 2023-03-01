function commonElements(firstArr, secondArr) {
    for (const firstEl of firstArr) {
        for (const secondEl of secondArr) {
            if (firstEl === secondEl) {
                console.log(firstEl);
            }
        }
    }
}