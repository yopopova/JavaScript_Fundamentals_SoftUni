function songs(input) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList,
            this.name = name,
            this.time = time,
            this.print = () => console.log(this.name)
        }
    }

    let arr = input.slice();
    let numberOfSongs = Number(arr.shift());
    let typeOfTheList = arr.pop();
    let arrOfSongs = [];

    for (let i = 0; i < numberOfSongs; i++) {
        let [listType, songName, duration] = arr[i].split('_');
        arrOfSongs.push(new Song(listType, songName, duration));
    }

    if (typeOfTheList === 'all') {
        arrOfSongs.forEach(el => el.print());
    } else {
        arrOfSongs
        .filter(el => el.typeList === typeOfTheList)
        .forEach(el => el.print());
    }
}

songs([3, 'favourite_DownTown_3:14', 'favourite_Kiss_4:16', 'favourite_Smooth Criminal_4:01', 'favourite']);
// songs([4, 'favourite_DownTown_3:14', 'listenLater_Andalouse_3:24', 'favourite_In To The Night_3:58', 'favourite_Live It Up_3:48', 'listenLater']);
// songs([2, 'like_Replay_3:15', 'ban_Photoshop_3:48', 'all']);