'use strict';

const box = document.querySelector('#box'),
      btns = document.querySelectorAll('button'),
      circles = document.querySelectorAll('.circle'),
      wrapper = document.querySelector('.wrapper'),
      hearts = wrapper.querySelectorAll('.heart'),
      oneHeart = wrapper.querySelector('.heart');
console.dir(box);
box.style.backgroundColor = 'aqua';
box.style.width = '300px';

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

box.style.cssText = 'background-color:black; width:500px';

circles.forEach(element => {
    element.style.backgroundColor = 'pink';
});

for (let i = 0; i < hearts.length; i++) {
    hearts[i].style.backgroundColor = 'blue';
}

const div = document.createElement('div');
const text = document.createTextNode('Тут был яяяяя');
const span = document.createElement('span');
span.append(text);
span.style.color = 'black';
document.body.append(text);

div.classList.add('black');
wrapper.append(div);

hearts[0].after(div);

circles[1].remove();
circles[2].replaceWith(hearts[1]);

// Старый формат
wrapper.insertBefore(div,hearts[2]);
//wrapper.replaceChild(hearts[1],circles[0]);

div.innerHTML = '<h1>Hello World</h1>';

div.insertAdjacentHTML('afterbegin', '<h2>1Hello</h2>');

//div.textContent = 'Hello';





