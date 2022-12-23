// Сделать первый символ заглавным
// важность: 5
// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:

function ucFirst(str) {
    let changedStr = str[0].toUpperCase() + str.slice(1);
    return changedStr;
}

alert(ucFirst("vasya") == "Vasya");

// Проверка на спам
// важность: 5
// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.
//
//     Функция должна быть нечувствительна к регистру:

function checkSpam (msg) {
    return msg.toLowerCase().includes('viagra') || msg.toLowerCase().includes('xxx');
}

console.log(checkSpam('buy ViAgRA now') == true)
console.log(checkSpam('free xxxxx') == true)
console.log(checkSpam("innocent rabbit") == false)

// Усечение строки
// важность: 5
// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.
//
//     Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.
//
//     Например:

function truncate(str, maxlength) {
    return (str.length > maxlength) ? str.slice(0, maxlength-1)+'…' : str;
}
console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:"))

console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) === "Вот, что мне хотело…")
console.log(truncate("Всем привет!", 20) )

console.log(truncate("Всем привет!", 20) === "Всем привет!")

// Выделить число
// важность: 4
// Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.
//
//     Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.
//
//     Например:

function extractCurrencyValue(str) {
    return +str.slice(1)
}

alert( extractCurrencyValue('$120') === 120 ); // true
