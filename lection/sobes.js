let l = 5;
console.log(l++)

//[ ] + false - null + true 
console.log(typeof([ ]+false)) // [] -- пустой массив превратился в пустую строку
// Конкартинируя пустую строку с false получаем "false"
console.log([ ] + false - null + true); // Мы все равно получим NaN  после того, как от строки отнимем другое значение 

let y = 1; 
let x = y = 2; // Первым идет декларация y на 2, а потом уже присваивание x на y 
console.log(x);

console.log([] + 1 +2); // Тут снова [] превращается в ''

console.log('321'[0]); // Тут по индексу выводим первый элемент строки по индексу

console.log(2 && 1 && null && 0 && undefined); // После null && не будет проверять дальше

let a,b
if(!!( a && b ) === (a && b)) { // "!!" превращает значение в booleanовое, а booleanовое значение не будет равно (a && b)
    console.log('true')
} else {
    console.log('false')
}
// И запинается на лжи
console.log(null || 2 && 3 || 4 ) // Вернёт 3 из 2&&3, так как она выполнится первее || и вернёт 3 (последнее значение)
// ИЛИ запинается на правде

const box1 = [1, 2, 3];
const box2 = [1, 2, 3];
console.log(box1 == box2); // false, потому что хранилища информации не могут быть равны

console.log(+"Infinity") // Infinity с типом данных число из за унарного плюса в начале (+)
console.log(typeof(+"Infinity"));

