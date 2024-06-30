function gramophone(band, album, song) {
    // We can transform every part of the input to string (ex: band = band.toString();) if there's need.
    
    let duration = (band.length * album.length) * song.length / 2;
    let rotations = Math.ceil(duration / 2.5);
    console.log(`The plate was rotated ${rotations} times.`);
}

gramophone('Black Sabbath', 'Paranoid', 'War Pigs');
gramophone('Rammstein', 'Sehnsucht', 'Engel');