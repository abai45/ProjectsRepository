'use strict';

let a = 5,
    b = a;

console.log(b+a);
console.log(a);

const obj = {
    a: 5,
    b:1
};

const copy = obj; // Мы передаём здесь ссылку на объект, а не создаём новый
copy.a = 11; // Модифицируем через ссылку главный объект
console.log(copy);

function copyFunc(mainObj) {
    let objCopy = {};
    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
};

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copyFunc(numbers);
newNumbers.a = 10;
newNumbers.c.x = 10;
console.log(newNumbers);
console.log(numbers);

const add = {
    d: 18,
    i: 20
};

const clone = Object.assign({},add);
clone.d = 20;

console.log(add);
console.log(clone);

const oldArray = ['a','b','c'];
const newArray = oldArray.slice();

newArray[1] = 'asdf';
console.log(newArray);
console.log(oldArray);

const video = ['youtube','vimeo','rutube'],
    blogs = ['wordpess','livejournal','blogger'],
    internet = [...video, ...blogs, 'vk', 'facebook']; // Spread operator

console.log(internet);

function log(a,b,c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2,5,8];

log(...num);

const array = ["a", "b"];

const newArray = [...array];

const q = {
    one:1,
    two:2,
    three:3
}

const newObj = {...q};
console.log(newObj)