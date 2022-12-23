// Задание 1. Поиск всех уникальных значений в массиве
// Тестовые данные:
// [1, 2, 4, 2, 4, 4, 5]
// [1, 2, 3, 4, 5]
// [1, -2, -2, 3, 4, -5, -6, -5]
// Ожидаемый результат:
// [1,2,4,5]
// [1,2,3,4,5]
// [1,-2,3,4,-5,-6]

// function search(arr) {
//   return Array.from(new Set(arr));
// }
// console.log(search([1, -2, -2, 3, 4, -5, -6, -5]));

// Задание 2. Определить сколько вмещается слов в
// предложение
// На входе мы мы получаем количество символов в предложении и массив из слов. Необходимо
// вывести количество слов, которое точно поместится в предложение.
// Тестовые данные:
// limesToCut(25, ['small', 'small', 'large', 'medium', 'small']);
// Ожидаемый результат:
// 4

// function limesToCut(amount, arr) {
//   let count = 0;
//   for (word of arr) {
//     if (amount >= word.length) {
//       amount = amount - word.length;
//       count++;
//     }
//   }
//   return count;
// }
// console.log(limesToCut(30, ['small', 'small', 'large', 'medium', 'small']));

// Задание 3. Определить количество нечетных чисел в
// массиве
// Тестовые данные:
// [1, 2, 3, 1, 5, 6],
// Ожидаемый результат:
// 4

// function countOdd(arr) {
//   let count = 0;
//   for (num of arr) {
//     if (num % 2 == 1) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countOdd([1, 2, 3, 1, 5, 6, 6, 1]));

// Задание 4. Преобразить порядковый номер игральной карты
// в ее роль
// Тестовые данные:
// [5, 11,12,13, 10]
// Ожидаемый результат:
// [5, 'jack', 'queen', 'king', 10]

// function convertCard(arr) {
//   for (i in arr) {
//     if (arr[i] == 11) {
//       arr.splice(i, 1, 'jack');
//     } else if (arr[i] == 12) {
//       arr.splice(i, 1, 'queen');
//     } else if (arr[i] == 13) {
//       arr.splice(i, 1, 'king');
//     }
//   }
//   return arr;
// }
// console.log(convertCard([5, 11, 12, 13, 10]));

// Задание 5. Создание визитки
// Тестовые данные:
// createVisitor(‘Иван Иванович',, 24, '89005553535');
// Ожидаемый результат:
//  { name: ‘Иван Иванович', age: 24, number: '89005553535' }

// function createVisitor(name, age, number) {
//   return { name, age, number };
// }
// console.log(createVisitor('Иван Иванович', 24, '89005553535'));

// Задание 6. Удалить минимум
// Тестовые данные:
// [1,2,3,4,5]
// Ожидаемый результат:
// [2,3,4,5]

// function deleteMin(arr) {
//   let accum = arr[0];
//   for (i in arr) {
//     if (arr[i] < accum) {
//       accum = arr[i];
//     }
//   }
//   for (i in arr) {
//     if (arr[i] === accum) {
//       arr.splice(i, 1);
//     }
//   }
//   return arr;
// }
// console.log(deleteMin([-1, 3, 2, 4, 5, 6, -1, -1]));
// console.log(deleteMin([-5, -6, -3, -2, -6, -1, -4, -6]));
// console.log(deleteMin([1, 2, 3, 4, 5]));

// Задание 7*. Минимально возможная сумма
// На входе мы мы получаем массив X положительных целых чисел, его элементы должны быть преобразованы путем
// выполнения следующей операции над ними столько раз, сколько требуется:
// if X[i] > X[j] then X[i] = X[i] - X[j]
// Тестовые данные:
// [6, 9, 21]
// Процесс решения:
// [6, 9, 12] #-> X[2] = 21 - 9
// [6, 9, 6] #-> X[2] = 12 - 6
// [6, 3, 6] #-> X[1] = 9 - 6
// [6, 3, 3] #-> X[2] = 6 - 3
// [3, 3, 3] #-> X[1] = 6 - 3
// Ожидаемые результат
// 9

// function minSum(arr) {
//   arr = arr.sort((a, b) => a - b);
//   arr.splice(arr.length - 1, 1, arr[arr.length - 1] - arr[arr.length - 2]);
//   console.log(arr);
//   console.log(arr.reduce((acc, num) => acc + num, 0));
//   if (arr[arr.length - 1] != arr[arr.length - 2]) {
//     minSum(arr);
//   }
//   return arr.reduce((acc, num) => acc + num, 0);
// }
// console.log(minSum([6, 9, 21, 7, 9645, 42354235, 312]));
