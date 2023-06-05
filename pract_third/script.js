'use strict';
let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?")

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?")
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat:false,
};

function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}

function writeUrGenres() {
    for (let i = 1; i <= 3; i++) {
    //    let genresAnswer = prompt(`Ваш любимый жанр под номером ${i}`);
    //    personalMovieDB.genres[i - 1] = genresAnswer;    
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

function rememberMyFilms() {
    for (let i = 1; i <= numberOfFilms ; i++) {
        let a = prompt(`Введите название ${i} фильма`),
            b;
   
        if (a != null && a != '') {
            if (a.length < 30) {
                b = prompt('Насколько бы вы оценили этот фильм?');
                personalMovieDB.movies[a] = b;
            } else {
                alert('Название фильма слишком длинное');
                i--;
            }
        } else {
            alert('Введите какое либо значение в поле');
            i--;
        }
    }
}
rememberMyFilms();
writeUrGenres();

function detectPersonalLevel() {
    if (personalMovieDB.count <= 10) {
        alert('Посмотрено довольно мало фильмов');
    } else if (personalMovieDB.count <= 30) {
        alert('Вы классический зритель');
    } else if (personalMovieDB.count > 30) {
        alert('Вы киноман');
    } else {
        alert('Произошла ошибка');
    }
}

detectPersonalLevel();
showMyDB();
