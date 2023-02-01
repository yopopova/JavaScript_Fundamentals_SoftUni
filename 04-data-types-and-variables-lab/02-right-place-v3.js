function rightPlace(firstString, char, secondString) {
    let newString = firstString.replace("_", char);
    let result = newString === secondString ? "Matched" : "Not Matched";
    console.log(result);
}