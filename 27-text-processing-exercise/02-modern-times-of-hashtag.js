function modernTimesOfHashtag(text) {
    let result = [];

    for (let element of text.split(' ')) {
        if (element[0] === '#' && element.length !== 1) {
            result.push(element.substring(1));
        }
    }

    let final = [];

    for (let el of result) {
        let array = el.split('');
        let arrL = array.length;
        let flag = true;

        for (let i = 0; i < arrL; i++) {
            let currentCode = array[i].charCodeAt(0);

            if ((currentCode < 97 || currentCode > 122) && (currentCode < 65 || currentCode > 90)) {
                flag = false;
            }
        }

        if (flag) {
            final.push(el);
        }
    }

    final.forEach(el => console.log(el));
}