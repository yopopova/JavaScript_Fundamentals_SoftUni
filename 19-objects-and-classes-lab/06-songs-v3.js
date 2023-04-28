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