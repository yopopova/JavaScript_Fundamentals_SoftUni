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
            .filter(s => s.playlist === desiredPlaylist) // This is how we get all the songs from the desired playlist.
            .forEach(s => s.print())
    }
}

songs([3, 'favourite_DownTown_3:14', 'favourite_Kiss_4:16', 'favourite_Smooth Criminal_4:01', 'favourite']);
songs([4, 'favourite_DownTown_3:14', 'listenLater_Andalouse_3:24', 'favourite_In To The Night_3:58', 'favourite_Live It Up_3:48', 'listenLater']);
songs([2, 'like_Replay_3:15', 'ban_Photoshop_3:48', 'all']);