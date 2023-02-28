// Число 0, пустая строка "", null, undefined и NaN становятся false
// Alert выведится

// if ("0") {
//   alert('Привет');
// }

/**
 * Используя конструкцию if..else, напишите код, который будет спрашивать:
 *  „Какое «официальное» название JavaScript?“
 * Если пользователь вводит «ECMAScript», то показать: «Верно!», в противном случае – отобразить:
 *  «Не знаете? ECMAScript!»
 *  */


const officialNameJS = () => {
  const nameJs = prompt('Какое «официальное» название JavaScript?')
  if (nameJs == 'ECMAScript') {
    alert('Верно!')
  } else {
    alert('Не знаете? ECMAScript!')
  }
}

/**
 * Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:
 * 
 * 1, если значение больше нуля,
 * -1, если значение меньше нуля,
 * 0, если значение равно нулю.
 * 
 * Предполагается, что пользователь вводит только числа.
 */

const numbers = () => {
  const number = prompt('Введите число')
  if (number > 0) {
    alert('1')
  } else if (number < 0) {
    alert('-1')
  } else {
    alert('0')
  }
}

// Перепишите конструкцию if с использованием условного оператора '?':
let result
// if (a + b
//   < 4) {
//   result = 'Мало'
// } else {
//   result = 'Много'
// }

result = a + b < 4 ? 'Мало' : 'Много'

// Перепишите if..else с использованием нескольких операторов '?'.
const query = () => {
  //let message;
  const login = prompt('Введите должность')
  // if (login == 'Сотрудник') {
  //   message = 'Привет';
  // } else if (login == 'Директор') {
  //   message = 'Здравствуйте';
  // } else if (login == '') {
  //   message = 'Нет логина';
  // } else {
  //   message = '';
  // }

  const message = login == 'Сотрудник' ? 'Привет' : login == 'Директор' ? 'Здравствуйте' : 'Нет логина'
  alert(message)
}


