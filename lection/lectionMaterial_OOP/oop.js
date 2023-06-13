'use strict';

// let str = 'some';
// let str_obj = new String(str);

// console.log(typeof(str));
// console.log(typeof(str_obj));

const soldier = {
    health:400,
    armor:100,
    sayHello: function() {
        console.log('Hello')
    }
};

const john = {
    health:100
};

//Старый способ создания прототипов
john.__proto__ = soldier;
console.log(john.armor);
john.sayHello();

//Новый способ создания прототипов
Object.setPrototypeOf(john, soldier);
console.log(john.armor);

const brain = Object.create(soldier);
brain.sayHello();