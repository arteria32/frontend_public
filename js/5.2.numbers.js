// Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.
// let num1 = +prompt('num1')
// let num2 = +prompt('num2')
// alert(num1 + num2)

// Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.
//
// Функция должна возвращать числовое значение.
//
// Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена». В этом случае функция должна вернуть null.

function readNumber() {
    let num;
    while (isNaN(num)) {
        num = prompt('num=')
    }
    if (num === null || num === '') {
        return null;
    }
    return +num;
}

alert(readNumber())

// Напишите функцию random(min, max), которая генерирует случайное число с плавающей точкой от min до max (но не включая max).
function random(min, max) {
    return min + Math.random() * (max-min);
}

alert( random(1, 5) ); // 1.2345623452
alert( random(1, 5) ); // 3.7894332423
alert( random(1, 5) ); // 4.3435234525

// Напишите функцию randomInteger(min, max), которая генерирует случайное целое (integer) число от min до max (включительно).
function randomInteger(min, max) {
    return Math.floor(min + Math.random() * (max+1-min));
}

alert( randomInteger(1, 5) ); // 1
alert( randomInteger(1, 5) ); // 3
alert( randomInteger(1, 5) ); // 5
