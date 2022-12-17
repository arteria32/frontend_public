// 2.1 Привет мир

// alert( "Я JAVASCRIPT" );

// 2.4 Переменные

// Задача 1
// let admin, name;
// name = "Джон";
// admin = name;
// alert( admin );

// Задача 2
// let ourPlanetName = "Земля";
// let currentUserName = "Вася";

// 2.5 Типы данных

// let name = "Ilya";
// alert( `hello ${1}` ); // hello 1
// alert( `hello ${"name"}` ); // hello name
// alert( `hello ${name}` ); // hello Ilya

// 2.6 Взаимодействие: alert, prompt, confirm

// let currentUserName = prompt("Ваше имя?", "");
// alert(currentUserName);

// 2.8 Базовые операторы, математика

// Задача 1
// let a = 1, b = 1;
// alert( ++a ); // 2
// alert( b++ ); // 1

// Задача 3
// "" + 1 + 0 // "10"
// "" - 1 + 0 // -1
// true + false // 1
// 6 / "3" // 2
// "2" * "3" // 6
// 4 + 5 + "px" // "9px"
// "$" + 4 + 5 // "$45"
// "4" - 2 // 2
// "4px" - 2 // NaN
// "  -9  " + 5 // "  -9  5"
// "  -9  " - 5 // -14
// null + 1 // 1
// undefined + 1 // NaN
// " \t \n" - 2 // -2

// Задача 4
// let a = +prompt("Первое число?", 1);
// let b = +prompt("Второе число?", 2);
// alert(a + b);

// 2.9 Операторы сравнения

// 5 > 4 // true
// "ананас" > "яблоко" // false
// "2" > "12" // true
// undefined == null // true
// undefined === null // false
// null === +"\n0\n" // false

//2.10 Условное ветвление

// Задача 1
// let value = prompt('Какое "официальное" название JavaScript?', '');
// if (value == 'ECMAScript') {
//   alert('Верно!');
// } else {
//   alert('Не знаете? ECMAScript!');
// }

// Задача 2
// let value = prompt('Введите число', 0);
// if (value > 0) {
//   alert(1);
// } else if (value < 0) {
//   alert(-1);
// } else {
//   alert(0);
// }

// Задача 3
// result = (a + b < 4) ? 'Мало' : 'Много';

// Задача 4
// let message =
//   login == 'Сотрудник'
//     ? 'Привет'
//     : login == 'Директор'
//     ? 'Здравствуйте'
//     : login == ''
//     ? 'Нет логина'
//     : '';

// 2.11 Логические операторы

// Задача 1
// if (age >= 14 && age <= 90)

// Задача 2
// if (age < 14 || age > 90)

// Задача 3
// let userName = prompt('Кто там?', '');
// if (userName === 'Админ') {
//   let pass = prompt('Пароль?', '');
//   if (pass === 'Я главный') {
//     alert('Здравствуйте!');
//   } else if (pass === '' || pass === null) {
//     alert('Отменено');
//   } else {
//     alert('Неверный пароль');
//   }
// } else if (userName === '' || userName === null) {
//   alert('Отменено');
// } else {
//   alert('Я вас не знаю');
// }

// 2.13 Циклы while и for

// Задача 1
// for (let i = 2; i <= 10; i++) {
//   if (i % 2 == 0) {
//     alert(i);
//   }
// }

// Задача 2
// let i = 0;
// while (i < 3) {
//   alert(`number ${i}!`);
//   i++;
// }

// Задача 3
// let num;
// do {
//   num = prompt('Введите число больше 100?', 0);
// } while (num <= 100 && num);

// Задача 4
// let n = 10;
// nextPrime: for (let i = 2; i <= n; i++) {
//   for (let j = 2; j < i; j++) {
//     if (i % j == 0) continue nextPrime;
//   }
//   alert(i);
// }

// 2.14 Конструкция "switch"

// Задача 1
// if (browser == 'Edge') {
//   alert("You've got the Edge!");
// } else if (
//   browser == 'Chrome' ||
//   browser == 'Firefox' ||
//   browser == 'Safari' ||
//   browser == 'Opera'
// ) {
//   alert('Okay we support these browsers too');
// } else {
//   alert('We hope that this page looks ok!');
// }

// Задача 2
// const number = +prompt('Введите число между 0 и 3', '');
// switch (number) {
//   case 0:
//     alert('Вы ввели число 0');
//     break;

//   case 1:
//     alert('Вы ввели число 1');
//     break;

//   case 2:
//   case 3:
//     alert('Вы ввели число 2, а может и 3');
//     break;
// }

// 2.15 Функции

// Задача 1
// function checkAge(age) {
//   return age > 18 || confirm('Родители разрешили?');
// }

// Задача 2
// function min(a, b) {
//   if (a < b) {
//     return a;
//   } else {
//     return b;
//   }
// }

// Задача 3
// function pow(x, n) {
//   let result = x;
//   for (let i = 1; i < n; i++) {
//     result *= x;
//   }
//   return result;
// }
// let x = prompt('x?', '');
// let n = prompt('n?', '');
// if (n < 1) {
//   alert(`Степень ${n} не поддерживается, используйте натуральное число`);
// } else {
//   alert(pow(x, n));
// }

// 2.17 Стрелочные функции, основы

// Задача 1
// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }
// ask(
//   'Вы согласны?',
//   () => alert('Вы согласились.'),
//   () => alert('Вы отменили выполнение.')
// );
