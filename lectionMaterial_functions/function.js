'use strict';

// Function Declaration
let num = 20;

function helloMessage(text) {
    console.log(`Вы написали ${text}`);
    let num = 10; // Локальная переменная
    console.log(num);
}

helloMessage("Some Text");
console.log(num);


// Функция с использованием return
function calc(a, b) {
    return (a + b);
}

console.log(calc(10, 40));


// Возвращает наружу какое либо значение внутри себя:
function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);


// Function Expression
const loger = function() {
    console.log('Function Expression');
}; // После этой функции нужно будет обязательно поставить ";"

loger();

// Стрелочная функция
const calculation = (a,b) => {return a + b};
console.log(calculation(5,5));