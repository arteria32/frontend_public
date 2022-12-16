"use strict";

// Перепишите функцию, используя оператор '?' или '||'
function checkAge(age) {
    return (age > 18) ? true : confirm('Родители разрешили?');
}

function checkAge(age) {
    return (age > 18) || confirm('Родители разрешили?');
}


// Функция min(a, b)

function min(a,b) {
    return (a < b) ? a : b;
}


// Функция pow(x,n)

function pow(x,n) {
    while(n) {
        x *= x;
        n--;
    }

    return x;
}

let x = prompt("Введите число x: ");
let n = prompt("Введите степень числа: ");

(n > 0) ? alert(pow(x**n)) : alert("Степень должна быть натуральной!");

