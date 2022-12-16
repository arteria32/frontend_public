"use strict";

// Выведите чётные числа

for (let i = 2; i <= 10; i++) {
    if (i % 2 != 0) continue;
    alert(i);
};


// Замените for на while

let i = 0;

while (i < 3) {
    alert( `number ${i}!` );
    i++;
}


// Повторять цикл, пока ввод неверен

let number;

do {
  number = prompt("Введите число, большеe 100: ");
} while (number <= 100 && number);


// Вывести простые числа

let n = prompt("Введите значение n: ");

outer: for (let i = 2; i <= n; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            continue outer;
        }
    };
    alert(i);
};