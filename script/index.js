"use strict";

// 1 Задача
//! Задание 1. Поиск всех уникальных значений в массиве
// Тестовые данные:

// [1, 2, 4, 2, 4, 4, 5]
// [1, 2, 3, 4, 5]
// [1, -2, -2, 3, 4, -5, -6, -5]
// Ожидаемый результат: [1,2,4,5]
// [1,2,3,4,5]
// [1,-2,3,4,-5,-6]

function uniqueInArray(arr) {
    return Array.from(new Set(arr));
}

// console.log(uniqueInArray([1, -2, -2, 3, 4, -5, -6, -5]));

/* //! Задание 2. Определить сколько вмещается слов в предложение
На входе мы мы получаем количество символов в предложении и массив из слов. Необходимо вывести количество слов, которое точно поместится в предложение.

Тестовые данные:
limesToCut(25, ['small', 'small', 'large', 'medium', 'small']);
Ожидаемый результат:
4 */

function limesToCut(strLength, arrStr) {
    let buf = arrStr.slice().sort((a, b) => -a.length + b.length);
    let num = 0;
    let maxStrLength = buf.shift().length;
    for (let i = arrStr.length - 2; i >= 0; --i) {
        strLength -= buf[i].length;
        ++num;
        buf.pop();
        if (strLength <= 0) {
            return num;
        }
    }
    if (maxStrLength <= strLength) {
        return ++num;
    }
    return num;
}

// console.log(
//     limesToCut(25, ["small", "small", "large", "medium", "small", "yes", "no"])
// );

/* //! Задание 3. Определить количество нечетных чисел в массиве
Тестовые данные:
[1, 2, 3, 1, 5, 6],
Ожидаемый результат:
4 */

function oddCount(arr) {
    return arr.reduce((count, val) => {
        if (val % 2 === 1) {
            return count + 1;
        }
        return count;
    }, 0);
}

// console.log(oddCount([1, 2, 3, 1, 5, 6, 7, 9, 11, 13]));

// //! Задание 4. Преобразить порядковый номер игральной карты в ее роль
// Тестовые данные:
// [5, 11,12,13, 10]
// Ожидаемый результат:
// [5, 'jack', 'queen', 'king', 10]

function cardConverter(arr) {
    let cardMap = new Map([
        [1, "ace"],
        [11, "jack"],
        [12, "queen"],
        [13, "king"],
    ]);
    return arr.map((val) => {
        if (cardMap.has(val)) {
            return cardMap.get(val);
        }
        return val;
    });
}

// console.log(cardConverter([5, 11, 12, 13, 10, 1, 2, 3, 4, 5]));

/* //! Задание 5. Создание визитки
Тестовые данные:
createVisitor(‘Иван Иванович',, 24, '89005553535');
Ожидаемый результат:
{ name: ‘Иван Иванович', age: 24, number: '89005553535' } */

function createVisitor(name, age, number) {
    return {
        name: name,
        age: age,
        number: number,
    };
}

// console.log(createVisitor("Иван Иванович", 24, "89005553535"));

/* //! Задание 6. Удалить минимум
Тестовые данные:
[1,2,3,4,5]
Ожидаемый результат:
[2,3,4,5] */
function deleteMin(arr) {
    arr.splice(arr.indexOf(Math.min(...arr)), 1);
    return arr;
}

// console.log(deleteMin([1, 2, 3, 4, 5]));

/* //! Задание 7*. Минимально возможная сумма

На входе мы мы получаем массив X положительных целых чисел, его элементы должны быть преобразованы
путем выполнения следующей операции над ними столько раз, сколько требуется:
if X[i] > X[j] then X[i] = X[i] - X[j]

Процесс решения:
[6, 9, 12] #-> X[2] = 21 - 9
[6, 9, 6] #-> X[2] = 12 - 6
[6, 3, 6] #-> X[1] = 9 - 6
[6, 3, 3] #-> X[2] = 6 - 3
[3, 3, 3] #-> X[1] = 6 - 3

Тестовые данные:
    [6, 9, 21]

Ожидаемые результат 9 */

function minSum(arr) {
    if (arr.length === 0) {
        return 0;
    }
    let buf = arr;
    buf.sort((a, b) => a - b);
    while (Math.max(...buf) > buf[0]) {
        buf[buf.length - 1] -= buf[0];
        buf.sort((a, b) => a - b);
    }
    return buf.reduce((sum, val) => sum + val);
}

// let arr = [6, 9, 21];
// console.log(minSum(arr));
