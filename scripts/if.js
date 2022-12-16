"use strict";

// Название JavaScript
let answer = prompt("Какое «официальное» название JavaScript?");

if (answer == "ECMAScript") {
    alert("Верно!");
} else {
    alert("Не знаете? ECMAScript!");
};

// Покажите знак числа
let number = prompt("Введите число: ");

if (number < 0) {
    alert("-1");
} else if (number == 0) {
    alert("0");
} else {
    alert("1");
};

// Перепишите 'if' в '?'

let result;
result = (a + b < 4) ? 'Мало' : 'Много';


// Перепишите 'if..else' в '?'

let message;
let login;

message = (login == 'Сотрудник') ? 'Привет' :
            (login == 'Директор') ? 'Здравствуйте' :
            (login == '') ? 'Нет логина' : '';

