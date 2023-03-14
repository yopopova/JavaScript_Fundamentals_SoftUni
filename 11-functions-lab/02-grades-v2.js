function grades(result) {
    if (result < 3) {
        return 'Fail (2)';
    } else if (result < 3.50) {
        return `Poor (${result.toFixed(2)})`;
    } else if (result < 4.50) {
        return `Good (${result.toFixed(2)})`;
    } else if (result < 5.50) {
        return `Very good (${result.toFixed(2)})`;
    } else {
        return `Excellent (${result.toFixed(2)})`;
    }
}