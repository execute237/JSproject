"use strict";
const number0fFilms = +prompt('Сколько фильмов вы уже посомтрели ?', '');
const lastFilms = prompt('Один из просмотренных фильмов?', ''),
      ratingFilms = +prompt ('На сколько оцените его? ( По десятибальной шкале )',''),
      secondLastFilms = prompt('Один из просмотренных фильмов?', ''),
      secondRatingFilms = +prompt ('На сколько оцените его? ( По десятибальной шкале )','');
let personalMovieDB = {
    count: number0fFilms,
    movies: {},
    actors: {},
    genres:[],
    private: false
};

personalMovieDB.movies[lastFilms] = ratingFilms;
personalMovieDB.movies [secondLastFilms] = secondRatingFilms;

console.log (personalMovieDB);