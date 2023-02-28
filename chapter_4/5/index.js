/**
 * Две функции - один объект
 * Возможно ли создать функции A и B, чтобы new A() == new B()?
 * 
 * function A() { ... }
 * function B() { ... }
 * 
 * let a = new A();
 * let b = new B();
 * 
 * console.log( a == b ); // true
 * 
 * Если да – приведите пример вашего кода.
 */
//нет - так как создаются два разных объекта хранящихся в разных ячейках памяти
function A() {
  this.name
}
function B() {
  this.name
}

let a = new A();
let b = new B();

console.log(a == b); // false
// да - если функция возвращает один и тот же объект, определенный ранее
let object = {}

function A2() {
  return object
}
function B2() {
  return object
}

let a2 = new A2();
let b2 = new B2();

console.log(a2 == b2); // true 



/** 
 * Создайте калькулятор при помощи конструктора, new Calculator
 * 
 * Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:
 * 
 *     read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
 *     sum() возвращает сумму этих свойств.
 *     mul() возвращает произведение этих свойств.
 * 
 * Например:
 * 
 * let calculator = new Calculator();
 * calculator.read();
 * alert( "Sum=" + calculator.sum() );
 * alert( "Mul=" + calculator.mul() );
 * 
 */
function Calculator() {
  this.x
  this.y
  this.read = function () {
    this.x = prompt('X')
    this.y = prompt('Y')
  }
  this.sum = function () {
    console.log(+this.x + (+this.y))
  }
  this.mul = function () {
    console.log(this.x * this.y)
  }
}

let calculator = new Calculator();

calculator.read()
calculator.sum()
calculator.mul()



/**
 * Создайте new Accumulator
 * 
 * Создайте функцию-конструктор Accumulator(startingValue).
 * Объект, который она создаёт, должен уметь следующее:
 *     Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
 *     Метод read() должен использовать prompt для считывания нового числа и прибавления его к value.
 * 
 * Другими словами, свойство value представляет собой сумму всех введённых пользователем значений, с учётом начального значения startingValue.
 * 
 * Ниже вы можете посмотреть работу кода:
 * 
 * let accumulator = new Accumulator(1); // начальное значение 1
 * 
 * accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
 * accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
 * 
 * alert(accumulator.value); // выведет сумму этих значений
 */

function Accumulator(startingValue) {
  this.value = startingValue
  this.read = function () {
    this.value += +prompt('Num')
  }
  this.accumulator = function () {
    console.log(this.value)
  }
}

let accumulator = new Accumulator(1)

accumulator.read()
accumulator.read()

console.log(accumulator.value)