'use strict';

function compareNum(a,b) {
    return a-b;
}
const arr = [1,23,31,45,5,66,72,8];
arr.sort(compareNum); // Отсортирует и модифицирует массив в порядке возрастания
console.log(arr);

/**Метод forEach используется для перебора и редактирования каждого элемента в массиве */ 
arr.forEach(function(item, i, arr) { // Принимает три аргумента: текущий элемент, номер этого элемента, а потом массив
    console.log(`Умножить ${i} элемент на 2 в массиве ${arr.join(";")}: ${item*2}`)
});
/**Обычно в большиснтве случаев перебора элементов массива используется forEach, 
   но если нужно использовать команды break;, continue; 
   используем for(цикл) */

const str = prompt("", "");
const products = str.split(","); // Разбивает большую строку на мелкие элементы, разделенные через "," и сохраняет их в массив products
console.log(products);
console.log(products.join('; ')); // Объединяет все элементы массива в строку. Элементы будут разделены через "; "

// arr.pop(); // Удаляет последний элемент массива
// console.log(arr)

// arr.push(10);// Добавляет в конец новый элемент
// console.log(arr); 

// /**Перебор массива */
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value)
// }




