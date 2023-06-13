'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat:true,
    start: () => {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?");
        while(personalMovieDB.count  == '' || personalMovieDB.count  == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?");
        }
    },
    showMyDB: () => {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        }
    },
    writeUrGenres: () => {
        for (let i = 1; i <= 3; i++) {
            let genre = '';
            while (genre === '' || genre === null) {
                genre = prompt(`Ваш любимый жанр под номером ${i}`);
            }
            personalMovieDB.genres[i - 1] = genre;
        }
    
        personalMovieDB.genres.forEach((genre, index) => {
            console.log(`Любимый жанр ${index + 1}) - это ${genre}`);
        });
    },      
    rememberMyFilms: () => {
        for (let i = 1; i <= personalMovieDB.count ; i++) {
            let a = prompt(`Введите название ${i} фильма`),
                b;
       
            if (a != null && a != '') {
                if (a.length < 30) {
                    b = prompt('Насколько бы вы оценили этот фильм?');
                    while(true) {
                        if (b ==='' || b === null || isNaN(b)) {
                           alert('Вы ввели некорректное значение.')
                           b = prompt('Насколько бы вы оценили этот фильм?');
                        } else {
                            personalMovieDB.movies[a] = b;
                            break;
                        }
                    }
                } else {
                    alert('Название фильма слишком длинное');
                    i--;
                }
            } else {
                alert('Введите какое либо значение в поле');
                i--;
            }
        }
    },
    detectPersonalLevel: () => {
        if (personalMovieDB.count <= 10) {
            alert('Посмотрено довольно мало фильмов');
        } else if (personalMovieDB.count <= 30) {
            alert('Вы классический зритель');
        } else if (personalMovieDB.count > 30) {
            alert('Вы киноман');
        } else {
            alert('Произошла ошибка');
        }
    },
    toggleVisibleMyDB: () => {
        if (personalMovieDB.privat == false) {
            personalMovieDB.privat = true;
        } else if(personalMovieDB.privat == true) {
            personalMovieDB.privat = false;
        }
    }
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.writeUrGenres();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();
personalMovieDB.detectPersonalLevel();


