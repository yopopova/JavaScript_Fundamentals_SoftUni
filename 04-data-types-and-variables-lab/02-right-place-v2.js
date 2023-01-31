function rightPlace(firstString, char, secondString) {
    let newString = firstString.replace("_", char);

    if (newString === secondString) {
        console.log("Matched");
    } else {
        console.log("Not Matched");
    }
}