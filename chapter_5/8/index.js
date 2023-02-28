/**
 * Хранение отметок "не прочитано"
 * 
 * Есть массив сообщений:
 * 
 * let messages = [
 *   {text: "Hello", from: "John"},
 *   {text: "How goes?", from: "John"},
 *   {text: "See you soon", from: "Alice"}
 * ];
 */

let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" }
];
const readMessage = new WeakSet

readMessage.add(messages[0])
readMessage.add(messages[1])

console.log(readMessage.has(messages[0]))

messages.shift()

console.log(messages)

/** 
 * Хранение времени прочтения
 * 
 * Есть массив сообщений такой же, как и в предыдущем задании.
 * 
 * let messages = [
 *   { text: "Hello", from: "John" },
 *   { text: "How goes?", from: "John" },
 *   { text: "See you soon", from: "Alice" }
 * ];
 * 
 * Теперь вопрос стоит так: какую структуру данных вы бы предложили использовать для хранения информации о том, когда сообщение было прочитано?
 * 
 * В предыдущем задании нам нужно было сохранить только факт прочтения «да или нет». Теперь же нам нужно сохранить дату, и она должна исчезнуть из памяти при удалении «сборщиком мусора» сообщения.
 * 
 * P.S. Даты в JavaScript можно хранить как объекты встроенного класса Date, которые мы разберём позднее.
 */

let messages2 = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" }
];

const readMap = new WeakMap()

readMap.set(messages2[0], new Date(2023, 1, 26))

console.log(readMap)