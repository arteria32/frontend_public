// Задание 3. Определить количество нечетных чисел в
// массиве

let test = [1, 2, 3, 1, 5, 6];

console.log(test.reduce((sum, elem) => (elem % 2 != 0 ? ++sum : sum), 0));
