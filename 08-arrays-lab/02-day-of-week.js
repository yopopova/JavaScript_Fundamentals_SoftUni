function dayOfWeek(day) {
    let arr = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    if (day >= 1 && day <= 7) {
        console.log(arr[day - 1]);
    } else {
        console.log('Invalid day!');
    }
}