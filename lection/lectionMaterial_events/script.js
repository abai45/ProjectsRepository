'use strict';

const btn = document.querySelector('#btn'),
      btns = document.querySelectorAll('button');

btn.addEventListener('click', (e) => {
    alert('click');
});

let i = 0
const deleteElement = (e) => {
    console.log(e.target);
    e.target.textContent = 'love u';
    i++;
    console.log(i)
    if (i == 5) {
        btn.removeEventListener('mouseenter', deleteElement);
    }
} 

btn.addEventListener('mouseenter', deleteElement);

const link = document.querySelector('a');

link.addEventListener('click',(e) => {
    e.preventDefault();
    console.log(e.target);
});

btns.forEach(item => {
    item.addEventListener('click', deleteElement, {once:true});
});

