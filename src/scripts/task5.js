// Задание 5: Покажите знак числа
// Используя конструкцию if..else, напишите код, который получает число через prompt, а затем
// выводит в alert:
//   1, если значение больше нуля,
//   -1, если значение меньше нуля,
//   0, если значение равно нулю.

// Предполагается, что пользователь вводит только числа.

const inputedNumber = prompt("Input number", 0);

if (inputedNumber > 0) {
  console.log(1);
} else if (inputedNumber < 0) {
  console.log(-1);
} else {
  console.log(0);
}