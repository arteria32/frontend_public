//Задание 1
let solve = prompt("Какое официальное название у JavaScript?");
if (solve == "ECMAScript") сonsole.log(`Верно!`);
else сonsole.log("Не знаете? ECMAScript");

//Задание 2
let num = prompt("Введите число");
if (num > 0) сonsole.log(1);
else if (num < 0) сonsole.log(-1);
else сonsole.log(0);

//Задание 3
let result = a + b < 4 ? "Мало" : "Много";

//Задание 4
let login=prompt('Enter login')
let message =
  login == "Сотрудник"
    ? "Привет"
    : login == "Директор"
    ? "Здравствуйте"
    : login == ""
    ? "нет логина"
    : " ";
    сonsole.log(message);
