// При помощи цикла for выведите чётные числа от 2 до 10.
for (let i = 2; i < 11; i++) {
    if (i % 2 !== 0) continue;
    alert(i);
}

// Перепишите код, заменив цикл for на while, без изменения поведения цикла.
let i = 0;
while (i < 3) {
    alert( `number ${i}!` );
    i++;
}

// Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.
// Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Отмена (ESC).
// Предполагается, что посетитель вводит только числа. Предусматривать обработку нечисловых строк в этой задаче необязательно.

let number = 0;
while (number <= 100) {
    number = prompt('Введите число')
    if (number === '' || number === null) break;
}

// Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.
// Другими словами, n > 1 – простое, если при его делении на любое число кроме 1 и n есть остаток.
// Например, 5 это простое число, оно не может быть разделено без остатка на 2, 3 и 4.
// Напишите код, который выводит все простые числа из интервала от 2 до n.
// Для n = 10 результат должен быть 2,3,5,7.
let n = 10;

next:
for (let i = 2; i <= n; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j === 0) continue next;
    }
    console.log(i);
}
