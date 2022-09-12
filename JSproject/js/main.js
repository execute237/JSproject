"use strict";

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres:[],
    private: false,

    start () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посомтрели ?', '').trim();
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посомтрели ?', '').trim();
        }
    },

    rememberMyFilms : function() {
        for (let i = 0; i < 2; i++){
            const lastFilms = prompt('Один из просмотренных фильмов?', '').trim(),
                  ratingFilms = +prompt ('На сколько оцените его?','').trim();
            
            if (lastFilms != '' && ratingFilms != '' && 
            lastFilms.length < 50 && lastFilms != null && ratingFilms != null) {
                
                personalMovieDB.movies[lastFilms] = ratingFilms;
                console.log ('done');
            } else {
                console.log ('error');
                i--;
            }      
        }
    },

    detectPersonalLevel : function () {
        if ( personalMovieDB.count < 10) {
            console.log ('Просмотренно мало фильмов');
        } else if ( personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log ('Вы классический зритель');
        } else if ( personalMovieDB.count >= 30) {
            console.log ('Вы киноман !');
        } else {
            console.log ('error');
        }
    },

    showMyDB : function () {
        if (personalMovieDB.private === false) {
            console.log (personalMovieDB);
        }
    },

    toggleVisibleMyDB : function () {
        if (personalMovieDB.private){
            personalMovieDB.private = false;
        } else {
            personalMovieDB.private = true;
        }
    },

    writeYourGenres : function () {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt (`Ваш любимый жанр под номером ${i}` , '');
            if (genre === '' || genre === null){
                i--;
            }
            personalMovieDB.genres[i - 1] = genre;
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log (`Любимый жанр ${i + 1} - это ${item}`);
        });
    }
};

/* personalMovieDB.start ();

personalMovieDB.rememberMyFilms ();

personalMovieDB.detectPersonalLevel ();

personalMovieDB.showMyDB ();

personalMovieDB.writeYourGenres (); */