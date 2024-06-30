function dayOfWeek(day) {
    let arr = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    if (day >= 1 && day <= 7) {
        console.log(arr[day - 1]); // To return us the correct day.
    } else {
        console.log('Invalid day!');
    }
}

dayOfWeek(3);
dayOfWeek(6);
dayOfWeek(11);