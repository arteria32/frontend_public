//Задание 2.1 (2 способ)
// alert("Я JavaScript!")

//Задание 2.4 (Работа с переменными)
// let admin, name;
// name = "Джон";
// admin = name;
// alert(admin)

//Задание 2.4 (Придумайте правильные имена)
let nameOurPlanet = "Земля";
let currentUserOnline = "Алексей";

//Задание 2.6 (Простая страница)  
// let name = prompt("Как тебя зовут");
// alert(`Приветствую, ${name}!`)

//Задание 2.8 (Исправьте сложение)  
// let a = prompt("Первое число?", 1);
// let b = prompt("Второе число?", 2);
// alert(+a + +b);

//Задание 2.10 (Название JavaScript) 
// let oficialName = "ECMAScript";
// let userAnswer = prompt("Какое «официальное» название JavaScript?","");
// if (userAnswer == oficialName) {
//     alert("Верно!");
// }
// else {
//     alert("Не знаете? ECMAScript!")
// }

//Задание 2.10 (Покажите знак числа) 
// let userAnswer = prompt("Введите любое число","");
// if (userAnswer > 0) {
//     alert("1");
// }
// else if (userAnswer < 0) {
//     alert("-1");
// } else {
//     alert("0")
// }

//Задание 2.10 (Перепишите 'if' в '?') 
// result = (a + b < 4) ? 'Мало' : 'Много';

//Задание 2.10 (Перепишите 'if..else' в '?') 
// let message = (login == 'Сотрудник') ? 'Привет' :
//   (login == 'Директор') ? 'Здравствуйте' :
//   (login == '') ? 'Нет логина' :
//   '';

//Задание 2.11 (Проверка значения из диапазона) 
// let age = prompt ("Сколько Вам лет?","");
// if (age>=14 && age<=90) {
//     alert("Условие выполнено");
// }
// else {
//     alert("Условие не выполнено");
// }

//Задание 2.11 (Проверка значения вне диапазона) 
// let age = prompt ("Сколько Вам лет?","");
// if (!(age>=14 && age<=90)) {
//     alert("Условие выполнено");
// }
// else {
//     alert("Условие не выполнено");
// }

//Задание 2.11 (Проверка логина)
// let login = "Админ";
// let password = "Я главный!";
// let userPassword;
// let userLogin = prompt("Кто там?","");
// if (userLogin == login) {
//     userPassword = prompt("Пароль?","")
//     if (userPassword == password) {
//         alert("Здравствуйте!");
//     } else if (userPassword === "" || userPassword === null) {
//         alert("Отменено");
//     } else {
//         alert("Неверный пароль");
//     }
// } else if (userLogin == "" || userLogin == null) {
//     alert("Отменено");
// } else {
//     alert("Я вас не знаю");
// }

//Задание 2.13 (Выведите чётные числа)
// for (let i = 1; i <= 10; i++) {
//     if (i % 2 != 0) continue;
//     console.log(i);
// }

//Задание 2.13 (Замените for на while)
// for (let i = 0; i < 3; i++) {
//     console.log( `number ${i}!` );
//   }
let i = 0;
while (i<3) {
    console.log(`number ${++i}!`)
}





