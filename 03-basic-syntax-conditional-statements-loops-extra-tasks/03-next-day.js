function nextDay(year, month, day) {
    let theNextDay = new Date(year, month - 1, day + 1);
    let newYear = theNextDay.getFullYear();
    let newMonth = theNextDay.getMonth() + 1;
    let newDay = theNextDay.getDate();
    console.log(`${newYear}-${newMonth}-${newDay}`);
}