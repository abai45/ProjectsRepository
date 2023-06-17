/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

// First TASK
const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против...",
        "Адам бол"
    ]
};

const parentAdv = document.querySelector('.promo__adv');
const imgAdvBlock = parentAdv.querySelectorAll('img');

console.log(imgAdvBlock);
const imgArray = [...imgAdvBlock];

console.log(imgArray);

imgArray.forEach((image,index) => {
    const uniqueData = 'imageAdv__' + (index+1);
    image.setAttribute('data-index', uniqueData);
    image.classList.add('imagesAdv');
    console.log(image);
});

const imagesAdv = document.querySelectorAll('.imagesAdv');
imagesAdv.forEach(element => {
    element.remove();
});

// Second TASK
const genre = document.querySelector('.promo__genre');
genre.textContent = 'Драма';

//Third TASK
const bg = document.querySelector('.promo__bg');
bg.style.background = 'url(../img/bg.jpg) top / cover no-repeat';

//Fourth & fifth TASK
console.log(movieDB.movies.sort());
const filmsList = document.querySelectorAll('.promo__interactive-item');
console.log(filmsList);
const filmsArray = [...filmsList];
console.log(filmsArray);

for (let i = 0; i < filmsList.length; i++) {
    filmsArray[i].textContent = `${i+1}. ${movieDB.movies[i]}`;
}
