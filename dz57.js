"use strict"

if (age >= 14 && age <= 90);

//

if (!(age >= 14 && age <= 90));

//

if (age < 14 || age > 90);

//

let login = prompt("Введите логин: ", '');
if (login == 'Админ') {
    let pass = prompt("Введите пароль: ", '');
    if (pass == null){
        alert("Отменено");
    } else if (pass == 'Я главный'){
        alert("Здравствуйте!");
    }else{
        alert("Неверный пароль");
    }
}