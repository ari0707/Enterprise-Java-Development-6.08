 // The `movies` array from the file `./data.js`.

 console.log('movies: ', movies);
 
 
 // Iteration 1: All directors? - Get the array of all directors.
 
 function getAllDirectors(moviesArray) {
    return moviesArray.map(movie => {
        return movie.director;
    });
 }

console.log(getAllDirectors(movies));
 
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

 function getAllUniqueDirectors(moviesArray){
    const newArray = moviesArray.reduce((acc, movie) => {
        if (!acc.includes(movie.director)) {
          acc.push(movie.director);
        }
    
        return acc;
      }, []);
    
      return newArray;
 }

 console.log(getAllUniqueDirectors(movies));
 
 // Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
 function howManyMovies(moviesArray) {
    return moviesArray.filter(function (movie) {
        return (
          movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
        );
      }).length;
 }

console.log(howManyMovies(movies));
    
 
 // Iteration 3: All scores average - Get the average of all scores with 2 decimals
 function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) return 0;

    const ratesSum = moviesArray.reduce(function(acc, element) {
      if (!element.score){
        return acc + 0;
      }
  
      return acc + element.score;
    }, 0);
  
    const avg = (ratesSum / moviesArray.length).toFixed(2);
  
    return avg;
 }

 console.log(scoresAverage(movies));
 
 // Iteration 4: Drama movies - Get the average of Drama Movies
 function dramaMoviesScore(moviesArray) {
    const genreDrama = moviesArray.filter((movie) => {
        return movie.genre.includes('Drama');
      })
      return scoresAverage(genreDrama);
 }

console.log(dramaMoviesScore(movies));
 
 // Iteration 5: Ordering by year - Order by year, ascending (in growing order)
 function orderByYear(moviesArray) {
    return moviesArray.map(function (movie) {
      return movie;
    }).sort(function (a, b) {
      if (a.year === b.year) {
        return a.title.localeCompare(b.title);
      }

      return a.year - b.year;
    });
 }

console.log(orderByYear(movies));
 
 // Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
 function orderAlphabetically(moviesArray) {
    const title = moviesArray.map(function (movie) {
        return movie.title;
      });
    
      title.sort(function (a, b) {
        return a.localeCompare(b);
      });
    
      const top20 = title.splice(0, 20);
    
      return top20;
 }

 console.log(orderAlphabetically(movies));
 
 // BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
 function turnHoursToMinutes() {}
 
 // BONUS - Iteration 8: Best yearly score average - Best yearly score average
 function bestYearAvg() {}