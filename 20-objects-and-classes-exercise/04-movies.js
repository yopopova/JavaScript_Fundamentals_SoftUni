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

            if (movie) { // If the movie exists, enter the check.
                movie.director = director;
            }

        } else if (line.includes('onDate')) {
            let [name, date] = line.split(' onDate ');
            let movie = allMovies.find((movieObj => movieObj.name === name));

            if (movie) { // If the movie exists, enter the check.
                movie.date = date;
            }
        }
    }

    // allMovies.forEach(el => {console.log(el.date)}); // Така проверяваме какво имаме в обектите.

    allMovies.forEach(movie => {
        if (movie.name && movie.director && movie.date) { // If the movie name, movie director, and date exist, enter the check.
            console.log(JSON.stringify(movie));
        }
    });
}

movies(['addMovie Fast and Furious', 'addMovie Godfather', 'Inception directedBy Christopher Nolan', 'Godfather directedBy Francis Ford Coppola', 'Godfather onDate 29.07.2018', 'Fast and Furious onDate 30.07.2018', 'Batman onDate 01.08.2018', 'Fast and Furious directedBy Rob Cohen']);