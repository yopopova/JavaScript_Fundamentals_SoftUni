function cone(r, h) {
    r = Number(r);
    h = Number(h);

    let volume = 1 / 3 * Math.PI * Math.pow(r, 2) * h;

    let s = Math.sqrt(Math.pow(r, 2) + Math.pow(h, 2));
    let sOne = Math.PI * r * (r + s);

    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${sOne.toFixed(4)}`);
}

cone(3, 5);
cone(3.3, 7.8);