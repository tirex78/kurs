/**
 * Переведите текст вида border-left-width в borderLeftWidth
 * 
 * Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
 * 
 * То есть дефисы удаляются, а все слова после них получают заглавную букву.
 * 
 * Примеры:
 * 
 * camelize("background-color") == 'backgroundColor';
 * camelize("list-style-image") == 'listStyleImage';
 * camelize("-webkit-transition") == 'WebkitTransition';
 * 
 * P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом join соедините обратно.
 */

const camelize = str => {

  const arr = str.split('-')

  let newArray = []

  for (let i = 1; i < arr.length; i++) {

    const start = arr[i].slice(0, 1).toUpperCase()
    const end = arr[i].slice(1)

    newArray.push(start + end)

  }
  return arr[0] + newArray.join('')
}

console.log(camelize("background-color"))
console.log(camelize("list-style-image"))
console.log(camelize("-webkit-transition"))

/**
 * Фильтрация по диапазону
 * 
 * Напишите функцию filterRange(arr, a, b), которая принимает массив arr, 
 * ищет элементы со значениями больше или равными a и меньше или равными b 
 * и возвращает результат в виде массива.
 * 
 * Функция должна возвращать новый массив и не изменять исходный.
 * 
 * Например:
 * 
 * let arr = [5, 3, 8, 1];
 * 
 * let filtered = filterRange(arr, 1, 4);
 * 
 * alert( filtered ); // 3,1 (совпадающие значения)
 * 
 * alert( arr ); // 5,3,8,1 (без изменений)
 */

const filterRange = (arr, a, b) => {
  return arr.filter(el => {
    if (el >= a && el <= b) {
      return el
    }
  })
}
// let arr = [5, 3, 8, 1]

// console.log(filterRange(arr, 1,4))
// console.log(arr)

/**
 * Фильтрация по диапазону "на месте"
 * 
 * Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех,
 *  которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.
 * 
 * Функция должна изменять принимаемый массив и ничего не возвращать.
 * 
 * Например:
 * 
 * let arr = [5, 3, 8, 1];
 * 
 * filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4
 * 
 * alert( arr ); // [3, 1]
 */

// ! РАЗОБРАТЬСЯ С i--
const filterRangeInPlace = (arr, a, b) => {

  for (let i = 0; i < 2; i++) {
    let val = arr[i]
    console.log(val)
    if (val < a || val > b) {
      arr.splice(i, 1)
      i--
    }
  }

  // arr.forEach((el, i) => {
  //   console.log(el, ' - ', i)
  //   if (el < a || el > b) {
  //     console.log('test', el)
  //     arr.splice(i, 1)
  //   }
  // })

}

//let arr = [5, 3, 8, 1];
// filterRangeInPlace(arr, 0, 2)
// console.log(arr)

/**
 * Сортировать в порядке по убыванию
 * 
 * let arr = [5, 2, 1, -10, 8];
 * 
 * alert( arr ); // 8, 5, 2, 1, -10
 */

const compareNumeric = (a, b) => {
  if (a < b) return 1
}
//let arr = [5, 2, 1, -10, 8]

//console.log(arr.sort(compareNumeric))


/**
 * копировать и отсортировать массив
 * 
 * У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.
 * 
 * Создайте функцию copySorted(arr), которая будет возвращать такую копию.
 * 
 * let arr = ["HTML", "JavaScript", "CSS"];
 * 
 * let sorted = copySorted(arr);
 * 
 * alert( sorted ); // CSS, HTML, JavaScript
 * alert( arr ); // HTML, JavaScript, CSS (без изменений)
 */
const copySorted = arr => arr.concat().sort()

// let arr = ["HTML", "JavaScript", "CSS"];
// console.log(copySorted(arr))
// console.log(arr)

/**
 * Создать расширяемый калькулятор
 * 
 * Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.
 * 
 * Задание состоит из двух частей.
 * 
 *     Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат.
 *  Метод должен понимать плюс + и минус -.
 * 
 *     Пример использования:
 * 
 * let calc = new Calculator;
 * 
 * alert( calc.calculate("3 + 7") ); // 10
 * 
 * Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции. Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.
 * 
 * Например, давайте добавим умножение *, деление / и возведение в степень **:
 * 
 *     let powerCalc = new Calculator;
 *     powerCalc.addMethod("*", (a, b) => a * b);
 *     powerCalc.addMethod("/", (a, b) => a / b);
 *     powerCalc.addMethod("**", (a, b) => a ** b);
 * 
 *     let result = powerCalc.calculate("2 ** 3");
 *     alert( result ); // 8
 * 
 *     Для этой задачи не нужны скобки или сложные выражения.
 *     Числа и оператор разделены ровно одним пробелом.
 *     Не лишним будет добавить обработку ошибок.
 * 
 */

function Calcualtor() {

  this.methods = {
    '-': (a, b) => a - b,
    '+': (a, b) => a + b
  };

  this.calculate = function (str) {

    let split = str.split(' '),
      a = +split[0],
      op = split[1],
      b = +split[2]

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[op](a, b);
  }

  this.addMethod = function (name, func) {
    this.methods[name] = func;
  };
}
const test = new Calcualtor
//console.log(test.calculate('5 + 2'))
//Calculator('5 - 2')



/**
 * Трансформировать в массив имён
 *
 * У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.
 *
 * Например:
 *
 * let vasya = { name: "Вася", age: 25 };
 * let petya = { name: "Петя", age: 30 };
 * let masha = { name: "Маша", age: 28 };
 *
 * let users = [ vasya, petya, masha ];
 *
 * let names = // ... ваш код
 *
 * alert( names ); // Вася, Петя, Маша
 */

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [vasya, petya, masha];

// const newArray = users.map(el => el.name)

//console.log(newArray)


/**
 * Трансформировать в объекты
 *
 * У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.
 *
 * Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName – состоит из name и surname.
 *
 * Например:
 *
 * let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
 * let petya = { name: "Петя", surname: "Иванов", id: 2 };
 * let masha = { name: "Маша", surname: "Петрова", id: 3 };
 *
 * let users = [ vasya, petya, masha ];
 *
 * let usersMapped = // ... ваш код ...
 *
 *  usersMapped = [
 *    { fullName: "Вася Пупкин", id: 1 },
 *    { fullName: "Петя Иванов", id: 2 },
 *    { fullName: "Маша Петрова", id: 3 }
 * ]
 *
 * alert( usersMapped[0].id ) // 1
 * alert( usersMapped[0].fullName ) // Вася Пупкин
 *
 * Итак, на самом деле вам нужно трансформировать один массив объектов в другой. Попробуйте использовать =>. Это небольшая уловка.
 */

// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [vasya, petya, masha];

// let usersMapped = users.map(el => {
//   return {
//     fullname: el.name + ' ' + el.surname,
//     id: el.id
//   }
// })
// console.log(usersMapped)
// console.log(usersMapped[0].id)
// console.log(usersMapped[0].fullname)
/**
 * Отсортировать пользователей по возрасту
 *
 * Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.
 *
 * Например:
 *
 * let vasya = { name: "Вася", age: 25 };
 * let petya = { name: "Петя", age: 30 };
 * let masha = { name: "Маша", age: 28 };
 *
 * let arr = [ vasya, petya, masha ];
 *
 * sortByAge(arr);
 *
 * теперь: [vasya, masha, petya]
 * alert(arr[0].name); // Вася
 * alert(arr[1].name); // Маша
 * alert(arr[2].name); // Петя
 */

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let arr = [vasya, petya, masha];

// const sortByAge = arr => {
//   arr.sort((a, b) => a.age > b.age ? 1 : -1)
// }

// sortByAge(arr);

// теперь: [vasya, masha, petya]
// console.log(arr)
// console.log(arr[0].name); // Вася
// console.log(arr[1].name); // Маша
// console.log(arr[2].name); // Петя

/**
 * Перемешайте массив
 *
 * Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.
 *
 * Многократные прогоны через shuffle могут привести к разным последовательностям элементов. Например:
 *
 * let arr = [1, 2, 3];
 *
 * shuffle(arr);
 * arr = [3, 2, 1]
 *
 * shuffle(arr);
 * arr = [2, 1, 3]
 *
 * shuffle(arr);
 *
 *  arr = [3, 1, 2]
 *
 * Все последовательности элементов должны иметь одинаковую вероятность. Например, [1,2,3] может быть переупорядочено как [1,2,3] или [1,3,2], или [3,1,2] и т.д., с равной вероятностью каждого случая.
 */

// let arr = [1, 2, 3];

// const shuffle = arr => {
//   return arr.map(el => [Math.random(), el]).sort().map(el => el[1])
//генерим пары, сортируем их по первому элементу, создаем новый массив без случайных чисел
// }
// console.log(shuffle(arr))

/**
 * Получить средний возраст
 *
 * Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age
 *  и возвращает средний возраст.
 *
 * Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.
 *
 * Например:
 *
 * let vasya = { name: "Вася", age: 25 };
 * let petya = { name: "Петя", age: 30 };
 * let masha = { name: "Маша", age: 29 };
 *
 * let arr = [ vasya, petya, masha ];
 *
 * alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28
 */

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };

// let arr = [vasya, petya, masha];

// const getAverageAge = arr => {
//   let age = 0
//   arr.forEach(el => {
//     age += el.age / arr.length
//   })
//   return age
// }

// console.log(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28


/**
 * Оставить уникальные элементы массива
 *
 * Пусть arr – массив строк.
 *
 * Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные
 *  элементы arr.
 *
 * Например:
 *
 * function unique(arr) {
 * ваш код
 * }
 *
 * let strings = ["кришна", "кришна", "харе", "харе",
 *   "харе", "харе", "кришна", "кришна", ":-O"
 * ];
 *
 * alert( unique(strings) ); // кришна, харе, :-O
 */
// const unique = arr => {

//   let newArray = []

//   for (let i of arr) {
//     if (newArray.indexOf(i) === -1) {
//       newArray.push(i)
//     }
//   }
//   return newArray
// }

// let strings = ["кришна", "кришна", "харе", "харе",
//   "харе", "харе", "кришна", "кришна", ":-O"
// ];

// console.log(unique(strings)); // кришна, харе, :-O


/**
 * Создайте объект с ключами из массива
 *
 * Допустим, мы получили массив пользователей в виде {id:..., name:..., age:... }.
 *
 * Создайте функцию groupById(arr), которая создаст из него объект с id в качестве ключа и элементами массива в качестве значений.
 *
 * Например:
 *
 * let users = [
 *   {id: 'john', name: "John Smith", age: 20},
 *   {id: 'ann', name: "Ann Smith", age: 24},
 *   {id: 'pete', name: "Pete Peterson", age: 31},
 * ];
 *
 * let usersById = groupById(users);
 *
 * после вызова у нас должно получиться:
 *
 * usersById = {
 *   john: {id: 'john', name: "John Smith", age: 20},
 *   ann: {id: 'ann', name: "Ann Smith", age: 24},
 *   pete: {id: 'pete', name: "Pete Peterson", age: 31},
 * }
 *
 * Такая функция очень удобна при работе с данными, которые приходят с сервера.
 *
 * В этой задаче мы предполагаем, что id уникален. Не может быть двух элементов массива с одинаковым id.
 *
 * Используйте метод .reduce в решении.
 */



// let users = [
//   { id: 'john', name: "John Smith", age: 20 },
//   { id: 'ann', name: "Ann Smith", age: 24 },
//   { id: 'pete', name: "Pete Peterson", age: 31 },
// ];

////let usersById = groupById(users);

// const groupById = arr => {
//   return arr.reduce((obj, el) => {
//     obj[el.id] = el;
//     return obj;
//   }, {})
// }
// console.log(groupById(users))