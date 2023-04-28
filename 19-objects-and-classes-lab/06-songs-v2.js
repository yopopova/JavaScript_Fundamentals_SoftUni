function songs(input) {
    class Song {
        constructor(playlist, name, time) {
            this.playlist = playlist,
            this.name = name,
            this.time = time,
            this.print = () => console.log(this.name)
        }
    }

    let numberOfSongs = input.shift();
    let desiredPlaylist = input.pop();
    let arrSongs = [];

    for (let i = 0; i < numberOfSongs; i++) {
        let currentInput = input[i];
        let currentArray = currentInput.split('_');
        let currentSong = new Song(currentArray[0], currentArray[1], currentArray[2]);
        arrSongs.push(currentSong);
    }

    if (desiredPlaylist === 'all') {
        arrSongs.forEach(s => s.print());
    } else {
        arrSongs
            .filter(s => s.playlist === desiredPlaylist)
            .forEach(s => s.print())
    }
}