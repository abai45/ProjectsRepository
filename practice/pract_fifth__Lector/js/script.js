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
        "Скотт Пилигрим против...",
        "Райский сад"
    ]
};

const adv = document.querySelectorAll('.promo__adv img'),
      poster = document.querySelector('.promo__bg'),
      genre = poster.querySelector('.promo__genre'),
      movieList = document.querySelector('.promo__interactive-list'),
      submit = document.querySelector('.add button'),
      input = document.querySelector('.adding__input');

adv.forEach(item => {
    item.remove();
});

genre.textContent = 'Драма';
poster.style.background = 'url(../img/bg.jpg) top / cover no-repeat';

movieList.innerHTML = "";
movieDB.movies.sort();

submit.addEventListener('click', (e) => {
    (e).preventDefault();

    movieList.innerHTML += `
    <li class="promo__interactive-item">${movieDB.movies.push(input.value)}
        <div class="delete"></div>
    </li>
    `;
})

movieDB.movies.forEach((film,index) => {
    movieList.innerHTML += `
    <li class="promo__interactive-item">${index+1}. ${film}
        <div class="delete"></div>
    </li>
    `;
});
