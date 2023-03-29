function loadingBar(n) {

    function loadedItems(num) {
        return '%'.repeat(num / 10);
    }

    function dots(arg) {
        return '.'.repeat((100 - arg) / 10);
    }

    let result = '';

    if(n === 100) {
        result = `${n}% Complete!\n` + '[' + loadedItems(n) + ']';
    } else {
        result = `${n}% [${loadedItems(n)}${dots(n)}]\nStill loading...`;
    }

    return result;
}