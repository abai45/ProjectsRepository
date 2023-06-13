'use strict';

const box = document.getElementById = 'box';

console.log(box);

// const btns1 = document.getElementsByTagName('button')[1]; // Получаем по индексу вторую кнопку
// console.log(btns);

const btns = document.getElementsByTagName('button');
console.log(btns[1]); // То же самое

const circle = document.getElementsByClassName('circle');
console.log(circle);

const hearts = document.querySelectorAll('.heart'); // Тут мы выбираем по селектору и указываем название класса начиная с . 
console.log(hearts);

hearts.forEach(item => {
    console.log(item);
});

const oneHeart = document.querySelector('.heart'); // Выбирает первый элемент с классом heart
console.log(oneHeart);