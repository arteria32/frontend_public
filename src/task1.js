// Задание 1. Поиск всех уникальных значений в массиве

let test1 = [1, 2, 4, 2, 4, 4, 5];
let test2 = [1, 2, 3, 4, 5];
let test3 = [1, -2, -2, 3, 4, -5, -6, -5];

console.log([...new Set(test1)]);
console.log([...new Set(test2)]);
console.log([...new Set(test3)]);
