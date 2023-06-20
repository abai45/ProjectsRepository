/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

// Возьмите свой код из предыдущей практики

const movieDB = {
    movies: [
        "Логан",
        "Нурболат чорт ебаный",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против...",
        "Адам бол"
    ]
};
function displayFilms() {
    movieDB.movies.forEach((newfilm,index) => {
        filmsList.innerHTML += `
        <li class="promo__interactive-item">${index+1}. ${newfilm}
            <div class="delete"></div>
        </li>
        `
    });
}
function tooMuch() {
    movieDB.movies.forEach((newfilm,index) => {
        filmsList.innerHTML += `
        <li class="promo__interactive-item">${index+1}. ${newfilm.slice(0,21)}...
            <div class="delete"></div>
        </li>
        `
    });
}
function isFavoriteFilmSelected() {
    const checkbox = document.querySelector('[data-id="inputData-3"]');
    return checkbox.checked;
};
function printFavoriteFilmMessafe() {
    console.log('Добавляем ваш любимый фильм');
}

const parentAdv = document.querySelector('.promo__adv'),
      imgAdvBlock = parentAdv.querySelectorAll('img'),
      bg = document.querySelector('.promo__bg'),
      genre = document.querySelector('.promo__genre'),
      filmsList = document.querySelector('.promo__interactive-list'),
      textInput = document.querySelector('.adding__input'),
      submit = document.querySelector('.add button'),
      input = document.querySelector('.adding__input'),
      trashBucket = document.querySelectorAll('.delete');

const imgArray = [...imgAdvBlock];

imgArray.forEach((image,index) => {
    const uniqueData = 'imageAdv__' + (index+1); // Генерирует уникальный id, чтобы удалить/заменить выборочно элемент
    image.setAttribute('data-index', uniqueData);
    image.classList.add('imagesAdv');
});

const imagesAdv = document.querySelectorAll('.imagesAdv');

imagesAdv.forEach(element => {
    element.remove();
});

genre.textContent = 'Драма';

bg.style.background = 'url(../img/bg.jpg) top / cover no-repeat';

movieDB.movies.sort();
filmsList.innerHTML = '';

displayFilms();

const inputs = document.querySelectorAll('input');
const inputsArray = [...inputs];

inputsArray.forEach((input,index) => {
    const uniqueInputData = `inputData-${index+1}`;
    input.setAttribute('data-id',uniqueInputData);
});

// ... Здесь надо продолжить.
 submit.addEventListener('click', (e) => {
    e.preventDefault();

    movieDB.movies.push(input.value);
    movieDB.movies.sort();
    filmsList.innerHTML = '';
    if (input.value.length >= 21) {
        tooMuch();
    } else {
        displayFilms();
    }
    if (isFavoriteFilmSelected()) {
        printFavoriteFilmMessafe();
    }
    input.value = '';
});

// Получилось дерьмо.



