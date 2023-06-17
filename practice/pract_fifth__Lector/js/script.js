/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Спуди мэн",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelectorAll('.promo__adv img'),
      poster = document.querySelector('.promo__bg'),
      genre = poster.querySelector('.promo__genre');

adv.forEach(item => {
    item.remove();
});

genre.textContent = 'Драма';
poster.style.background = 'url(../img/bg.jpg) top / cover no-repeat';

const filmsList = document.querySelectorAll('.promo__interactive-item');
movieDB.movies.sort();
for (let i = 0; i < filmsList.length; i++) {
    filmsList[i].textContent = movieDB.movies[i];
}
