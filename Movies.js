function movies(arr) {
  let movies = [];
  let movie = {};

  let getMovieName = function (commands, commandIndex) {
    let movieName = "";
    for (let j = 0; j < commandIndex; j++) {
      movieName = movieName.concat(commands[j], " ");
    }
    movieName = movieName.trim();
    return movieName;
  };

  Array.prototype.MyJoin = function (seperator, start, end) {
    if (!start) start = 0;
    if (!end) end = this.length - 1;
    end++;
    return this.slice(start, end).join(seperator);
  };

  for (let i = 0; i < arr.length; i++) {
    let commands = arr[i].split(" ");

    if (commands[0] === "addMovie") {
      movie.name = commands.MyJoin(" ", 1);
      movies.push(movie);
      movie = {};
    } else {
      let commandIndex;
      let movieName = "";
      let director;
      let date;

      if (commands.includes("directedBy")) {
        commandIndex = commands.indexOf("directedBy");
        movieName = getMovieName(commands, commandIndex);

        let checkMoviePresenceInArray = (name) =>
          movies.some((movie) => Object.values(movie).includes(name));

        if (checkMoviePresenceInArray(movieName)) {
          for (let j = 0; j < movies.length; j++) {
            if (movies[j].name == movieName) {
              director = commands.MyJoin(" ", commandIndex + 1);
              movies[j].director = director;
            }
          }
        }
      } else if (commands.includes("onDate")) {
        commandIndex = commands.indexOf("onDate");
        movieName = getMovieName(commands, commandIndex);

        let checkMoviePresenceInArray = (name) =>
          movies.some((movie) => Object.values(movie).includes(name));
        if (checkMoviePresenceInArray(movieName)) {
          for (let j = 0; j < movies.length; j++) {
            if (movies[j].name == movieName) {
              date = commands[commands.length - 1];
              movies[j].date = date;
            }
          }
        }
      }
    }
  }

  for (let i = 0; i < movies.length; i++) {
    if ("name" in movies[i] && "director" in movies[i] && "date" in movies[i]) {
      console.log(JSON.stringify(movies[i]));
    }
  }
}
