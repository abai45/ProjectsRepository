'use strict';
// Тернальный оператор
let num = 50;

(num > 50) ? console.log('ok') : console.log('error');
// Switch
const sec = 90;

switch (sec) {
    case 49: console.log('error'); 
        break;
    case 90: console.log('ok');
        break;
    case 59: console.log('69');
        break;
    case '90': console.log('ok2');
        break;
    default: console.log('default');
        break;
}