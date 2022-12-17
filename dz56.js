"use strict";

let nameJavaScript = prompt("Какое «официальное» название JavaScript?", '');

if (nameJavaScript == 'ECMAScript'){
    alert('Верно!')
} else{
    alert('Не знаете? ECMAScript!')
}

// 2

let number = prompt("Введите число", '');
if (+number > 0){
    alert(1)
} else if (number < 0){
    alert(-1)
} else{
    alert(0)
}

// 3


result = (a + b < 4) ? 'Мало' : 'Много';

// 4

message = (login == 'Сотрудник') ? 'Привет':
(login == 'Директор') ? 'Здравствуйте':
(login == '') ? 'Нет логина':
'';