// Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.

let firstValue = +prompt("Первое число", "");
let secondValue = +prompt("Второе число", "");

console.log(firstValue + secondValue);

/*Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.

Функция должна возвращать числовое значение.

Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена». В этом случае функция должна вернуть null.*/

function readNumber() {
    let meaning;
    do {
      meaning = prompt("Введите значение", 0);
    } while ( !isFinite(meaning) );
  
    if (meaning === null || meaning === '') return null;
  
    return +meaning;
  }
    console.log(readNumber());