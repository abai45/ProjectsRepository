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

const parentAdv = document.querySelector('.promo__adv'),
      imgAdvBlock = parentAdv.querySelectorAll('img'),
      bg = document.querySelector('.promo__bg'),
      genre = document.querySelector('.promo__genre'),
      filmsList = document.querySelector('.promo__interactive-list'),
      textInput = document.querySelector('.adding__input'),
      submit = document.querySelector('.add button'),
      input = document.querySelector('.adding__input');

//First TASK
const imgArray = [...imgAdvBlock];

imgArray.forEach((image,index) => {
    const uniqueData = 'imageAdv__' + (index+1); // Генерирует уникальный id, чтобы удалить/заменить выборочно элемент
    image.setAttribute('data-index', uniqueData);
    image.classList.add('imagesAdv');
    console.log(image);
});

const imagesAdv = document.querySelectorAll('.imagesAdv');

imagesAdv.forEach(element => {
    element.remove();
});

// Second TASK
genre.textContent = 'Драма';

//Third TASK
bg.style.background = 'url(../img/bg.jpg) top / cover no-repeat';

//Fourth & fifth TASK
movieDB.movies.sort();
filmsList.innerHTML = '';
// const filmsArray = [...filmsList];

// for (let i = 0; i < filmsList.length; i++) {
//     filmsArray[i].textContent = `${i+1}. ${movieDB.movies[i]}`;
// }

movieDB.movies.forEach((movie,index) => {
    filmsList.innerHTML += `
        <li class="promo__interactive-item">${index+1}.${movie}
            <div class="delete"></div>
        </li>
    `
});

 // ... Здесь надо продолжить.
 submit.addEventListener('click', (e) => {
    e.preventDefault();

    movieDB.movies.push(input.value);
    filmsList.innerHTML = '';
    movieDB.movies.forEach((newfilm,index) => { //Желательно поменять способ отображения...  
        if (input.value > 21) {        
            filmsList.innerHTML += `
                <li class="promo__interactive-item">${index+1}. ${newfilm.substring(0,21)}...
                    <div class="delete"></div>
                </li>
                `
        } else {
            filmsList.innerHTML += `
            <li class="promo__interactive-item">${index+1}. ${newfilm}
                <div class="delete"></div>
            </li>
            `
        }
    })
});

