'use strict';
/*My variant*/
// // first task
// let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
// console.log(numberOfFilms);
// // second task
// let count = numberOfFilms;
// let movies = {
//     first:"logan",
//     second:"fox",
// };
// let actors = {
//     a:4,
//     b:5,
// };
// let genres = [4324,43242,,22,4];
// let privat = true;

// let personalMovieDB = {
//     count,
//     movies,
//     actors,
//     genres,
//     privat,
// };
// console.log(personalMovieDB);
// // third task
// let lastFilm = prompt("Один из последних просмотренных фильмов?");
// let ratingFilm = +prompt("Насколько бы вы его оценили?");

// let moviesDB = {
//     lastFilm:ratingFilm,
// };
// console.log(moviesDB);

// Lector's variant
let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
console.log(numberOfFilms)
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat:false,
};

const a = prompt("Один из последних просмотренных фильмов?"),
      b = prompt("Насколько бы вы его оценили?"),
      c = prompt("Один из последних просмотренных фильмов?"),
      d = prompt("Насколько бы вы его оценили?");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);