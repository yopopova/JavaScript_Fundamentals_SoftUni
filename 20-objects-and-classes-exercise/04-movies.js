function movies(input) {
    let allMovies = [];

    for (let line of input) {
        if (line.includes('addMovie')) {
            let name = line.split('addMovie ')[1];
            allMovies.push({
                name: name
            })

        } else if (line.includes('directedBy')) {
            let [name, director] = line.split(' directedBy ');
            let movie = allMovies.find((movieObj => movieObj.name === name));

            if (movie) {
                movie.director = director;
            }

        } else if (line.includes('onDate')) {
            let [name, date] = line.split(' onDate ');
            let movie = allMovies.find((movieObj => movieObj.name === name));

            if (movie) {
                movie.date = date;
            }
        }
    }

    allMovies.forEach(movie => {
        if (movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie));
        }
    });
}