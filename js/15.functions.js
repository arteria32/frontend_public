// Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.
// function checkAge(age) {
//     if (age > 18) {
//         return true;
//     } else {
//         return confirm('Родители разрешили?');
//     }
// }
// Сделайте два варианта функции checkAge:
//     Используя оператор ?
//     Используя оператор ||

//1
function checkAge(age) {
    return (age > 18) ?  true : confirm('Родители разрешили?');
}
//2
function checkAge(age) {
    return (age > 18) || confirm('Родители разрешили?');
}

// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.
function min(a,b) {
    return (a<b) ? a : b;
}

// Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.
function pow(x,n) {
    return x**n;
}

let x = prompt("Введите x", '');
let n = prompt("Введите n", '');

if (n < 1) {
    alert(`Степень ${n} не поддерживается, используйте натуральное число`);
} else {
    alert( pow(x, n) );
}
