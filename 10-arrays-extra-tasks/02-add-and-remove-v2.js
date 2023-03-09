function addAndRemove(arr) {
    let finalArr = [];
    let counter = 0;

    arr.map(el => {
        counter++;
        el === 'add' ? finalArr.push(counter) : finalArr.pop(counter);
    });

    finalArr.length === 0 ? console.log('Empty') : console.log(finalArr.join(' '));
}