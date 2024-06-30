function loadingBar(n) {

    function loadedItems(num) {
        return '%'.repeat(num / 10);
    }

    function dots(num) {
        return '.'.repeat((100 - num) / 10);
    }

    let result = '';

    if (n === 100) {
        result = `${n}% Complete!\n` + '[' + loadedItems(n) + ']';
    } else {
        result = `${n}% [${loadedItems(n)}${dots(n)}]\nStill loading...`;
    }

    console.log(result);
}

loadingBar(30);
loadingBar(50);
loadingBar(100);