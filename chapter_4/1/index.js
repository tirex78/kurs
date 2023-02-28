/**
 * Напишите код, выполнив задание из каждого пункта отдельной строкой:
 * 
 * Создайте пустой объект user.
 *     Добавьте свойство name со значением John.
 *     Добавьте свойство surname со значением Smith.
 *     Измените значение свойства name на Pete.
 *     Удалите свойство name из объекта.
 */

const user = {
  name: 'John',
  surname: 'Smith'
}

console.log('1', user)

user.name = 'Pete'

console.log('2', user)

delete user.name

console.log('3', user)


/**
 * Напишите функцию isEmpty(obj), 
 * которая возвращает true, если у объекта нет свойств, 
 * иначе false.
 * 
 * Должно работать так:
 * 
 * let schedule = {};
 * alert( isEmpty(schedule) ); // true
 * schedule["8:30"] = "get up";
 * alert( isEmpty(schedule) ); // false
 */

let schedule = {};



const isEmpty = schedule => {
  for (let key in schedule) {
    return false
  }
  return true
}
console.log(isEmpty(schedule)); // true

schedule["8:30"] = "get up";

console.log(isEmpty(schedule)); // false

/**
 * Можно ли изменить объект, объявленный с помощью const? Как вы думаете?
 * 
 * const user = {
 *   name: "John"
 * };
 * 
 * // это будет работать?
 * user.name = "Pete";
 */
// Изменить можно, работать будет

/**
 * У нас есть объект, в котором хранятся зарплаты нашей команды:
 * 
 * let salaries = {
 *   John: 100,
 *   Ann: 160,
 *   Pete: 130
 * }
 * 
 * Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
 * 
 * Если объект salaries пуст, то результат должен быть 0.
 */

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let sum = 0

for (key in salaries) {
  sum += salaries[key]
}

console.log(sum)

/**
 * Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
 * 
 * Например:
 * 
 * // до вызова функции
 * let menu = {
 *   width: 200,
 *   height: 300,
 *   title: "My menu"
 * };
 * 
 * multiplyNumeric(menu);
 * 
 * // после вызова функции
 * menu = {
 *   width: 400,
 *   height: 600,
 *   title: "My menu"
 * };
 * 
 * Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.
 * 
 * P.S. Используйте typeof для проверки, что значение свойства числовое.
 */

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};



const multiplyNumeric = obj => {

  for (el in obj) {
    if (typeof obj[el] === 'number') {
      obj[el] = obj[el] * 2
    }
  }

  return obj
}
console.log(multiplyNumeric(menu))