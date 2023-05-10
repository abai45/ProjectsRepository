'use strict';
let numberOfFilms;

do {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
} while (numberOfFilms === 0 || numberOfFilms === '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat:false,
};

/* Задача с циклом for */
// for (let i = 1; i <= numberOfFilms ; i++) {
//     let a = prompt(`Введите название ${i} фильма`),
//         b;

//     // a.length > 10 ? alert('Название фильма слишком длинное') : b = prompt('Насколько бы вы оценили этот фильм?');
    
//     if (a != null && a != '') {
//         if (a.length < 10) {
//         b = prompt('Насколько бы вы оценили этот фильм?');
//         personalMovieDB.movies[a] = b;
//         } else {
//             alert('Название фильма слишком длинное');
//             i--;
//         }
//     } else {
//         alert('Введите какое либо значение в поле');
//         i--;
//     }
// }

/* Задача с циклом do ... while */
// let i = 1;
// do {

//     let a = prompt(`Введите название ${i} фильма`),
//     b;
//     i++;

//     if (a != null && a != '') {
//         if (a.length < 10) {
//         b = prompt('Насколько бы вы оценили этот фильм?');
//         personalMovieDB.movies[a] = b;
//         } else {
//             alert('Название фильма слишком длинное');
//             i--;
//         }
//     } else {
//         alert('Введите какое либо значение в поле');
//         i--;
//     }
// } while (i <= numberOfFilms);

/* Задача с циклом while */
let i = 1;
while (i <= numberOfFilms) { 
    let a = prompt(`Введите название ${i} фильма`),
    b;
    i++;
    
    if (a != null && a != '') {
        if (a.length < 10) {
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
console.log(personalMovieDB);

if (personalMovieDB.count <= 10) {
    alert('Посмотрено довольно мало фильмов');
} else if (personalMovieDB.count <= 30) {
    alert('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
    alert('Вы киноман');
} else {
    alert('Произошла ошибка');
}



/* В switch такое не сработает, потому что там не могут хранится логические выражения */
// switch (personalMovieDB.count) {
//     case personalMovieDB.count < 10: alert('Посмотрено довольно мало фильмов');
//         break;
//     case personalMovieDB.count >= 10 && personalMovieDB <= 30: alert('Вы классический зритель');
//         break;
//     case personalMovieDB.count > 30: alert('Вы киноман');
//         break;
//     default: alert('Произошла ошибка');
//         break;
// }
