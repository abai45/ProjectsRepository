/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener('DOMContentLoaded',() => {
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

    const displayFilms = (films, parent) => {
        parent.innerHTML = "";
        sortArray(films);
        films.forEach((film,index) => {
            parent.innerHTML += `
            <li class="promo__interactive-item">${index+1}. ${film}
                <div class="delete"></div>
            </li>
            `;
        });
        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                displayFilms(films, parent);
            })
        });
    }
    const deleteFunc = (deleteItem) => {
        deleteItem.forEach(item => {
            item.remove();
        });
    }
    const makeChanges = () => {
        genre.textContent = 'Драма';
        poster.style.background = 'url(../img/bg.jpg) top / cover no-repeat';
    }
    const sortArray = (arr) => {
        arr.sort();
    }

    const adv = document.querySelectorAll('.promo__adv img'),
          poster = document.querySelector('.promo__bg'),
          genre = poster.querySelector('.promo__genre'),
          movieList = document.querySelector('.promo__interactive-list'),
          addForm = document.querySelector('form.add'),
          addInput = document.querySelector('.adding__input'),
          checkbox = document.querySelector('[type ="checkbox"]');

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = addInput.value;
        const favorite = checkbox.checked;
        if (newFilm) { // Динамическая типизация.
            if(newFilm.length > 21) {
                newFilm = `${newFilm.substring(0,21)}...`
            }
            if (favorite) {
                console.log("Добавляем любимый фильм")
            }
            movieDB.movies.push(newFilm);
            sortArray(movieDB.movies);
    
            displayFilms(movieDB.movies, movieList);
        } 
        event.target.reset();
    })

    displayFilms(movieDB.movies, movieList);
    deleteFunc(adv);
    makeChanges();
});
