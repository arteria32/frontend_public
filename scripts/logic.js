"use strict";

// Проверка значения из диапазона
let age = prompt("Введите возраст: ");

if (age >= 14 && age <= 90) {
    alert("True");
} else {
    alert("False");
};


// Проверка значения вне диапазона

// С использованием !
let age = prompt("Введите возраст: ");

if (!(age >= 14) || !(age <= 90)) {
    alert("True");
} else {
    alert("False");
};

// Без использования !
if ((age < 14) || (age > 90)) {
    alert("True");
} else {
    alert("False");
}


// Проверка логина

let person = prompt("Кто там?");

if (person == "Админ") {
    let password = prompt("Введите пароль: ");

    if (password == "Я главный") {
        alert("Здравствуйте!");
    } else if (password == null || password == "") {
        alert("Отменено");
    } else {
        alert("Неверный пароль!");
    };

} else if (person == null || person == "") {
    alert("Отменено");
} else {
    alert("Я вас не знаю!");
};


