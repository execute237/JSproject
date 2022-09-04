"use strict";
const number0fFilms = +prompt('Сколько фильмов вы уже посомтрели ?', '');

let personalMovieDB = {
    count: number0fFilms,
    movies: {},
    actors: {},
    genres:[],
    private: false
};

for (let i = 0; i < 2; i++){
    const lastFilms = prompt('Один из просмотренных фильмов?', ''),
          ratingFilms = +prompt ('На сколько оцените его?','');
    
    if (lastFilms != '' && ratingFilms != '' && 
    lastFilms.length < 50 && lastFilms != null && ratingFilms != null) {
        
        personalMovieDB.movies[lastFilms] = ratingFilms;
        console.log ('done');
    } else {
        console.log ('error');
        i--;
    }

}

if ( personalMovieDB.count < 10) {
    console.log ('Просмотренно мало фильмов');
} else if ( personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log ('Вы классический зритель');
} else if ( personalMovieDB.count >= 30) {
    console.log ('Вы киноман !');
} else {
    console.log ('error');
}

console.log (personalMovieDB);