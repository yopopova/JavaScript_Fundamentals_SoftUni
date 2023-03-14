function grades(result) {
    if (result < 3) {
        console.log('Fail (2)');
    } else if (result < 3.50) {
        console.log(`Poor (${result.toFixed(2)})`);
    } else if (result < 4.50) {
        console.log(`Good (${result.toFixed(2)})`);
    } else if (result < 5.50) {
        console.log(`Very good (${result.toFixed(2)})`);
    } else {
        console.log(`Excellent (${result.toFixed(2)})`);
    }
}