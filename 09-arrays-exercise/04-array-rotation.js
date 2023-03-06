function arrayRotation(arr, n) {
    for (let i = 0; i < n; i++) {
        let element = arr.shift();
        arr.push(element);
    }

    console.log(arr.join(' '));
}