function fancyBarcodes(input) {
    let n = Number(input.shift());
    let regEx = /(@#+)([A-Z][A-Za-z0-9]{4,}[A-Z])\1/;
    let digitRegEx = /\d/;

    for (let i = 0; i < n; i++) {
        let currentCode = input[i];

        if (regEx.test(currentCode)) {
            let productGroup = [...currentCode].filter(char => digitRegEx.test(char)).join('');

            if (productGroup.length > 0) {
                console.log(`Product group: ${productGroup}`);
            } else {
                console.log(`Product group: 00`);
            }

        } else {
            console.log('Invalid barcode');
        }
    }
}