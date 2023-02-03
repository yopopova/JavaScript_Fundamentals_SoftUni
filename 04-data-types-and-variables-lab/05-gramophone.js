function gramophone(band, album, song) {
    let duration = (band.length * album.length) * song.length / 2;
    let rotations = Math.ceil(duration / 2.5);
    console.log(`The plate was rotated ${rotations} times.`);
}