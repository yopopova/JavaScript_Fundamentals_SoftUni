function addAndRemove(arr) {
    let arrL = arr.length;
    let counter = 0;
    let newArr = [];

    for (let i = 0; i < arrL; i++) {
        counter++;

        if (arr[i] === 'add') {
            newArr.push(counter);
        } else if (arr[i] === 'remove') {
            newArr.pop(counter);
        }
    }

    if (newArr.length === 0) {
        console.log('Empty');
    } else {
        console.log(newArr.join(' '));
    }
}