// Задание 1. Поиск всех уникальных значений в массиве
let firstArray = [1, 2, 4, 2, 4, 4, 5];
let secondArray = [1, 2, 3, 4, 5];
let thirdArray = [1, -2, -2, 3, 4, -5, -6, -5];
console.log('ClearFirstArray', [...new Set(firstArray)]);
console.log('ClearSecondArray', [...new Set(secondArray)]);
console.log('ClearThirdArray', [...new Set(thirdArray)]);

// Задание 2. Определить сколько вмещается слов в
// предложение
// На входе мы мы получаем количество символов в предложении и массив из слов. Необходимо
// вывести количество слов, которое точно поместится в предложение.

function limesToCut(stringLength, strArray) {
    let wordsCounter = -1;
    strArray.sort((a, b) => {
        return a.length - b.length;
    });
    while (stringLength > 0) {
        stringLength = stringLength - strArray[++wordsCounter].length;
    }
    return wordsCounter;
}

console.log(limesToCut(2, ['small', 'small', 'large', 'medium', 'small']));

// Задание 3. Определить количество нечетных чисел в массиве
let array = [1, 2, 3, 1, 5, 6];
let oddNumbersCounter = 0;
for (let number of array) {
    if (number % 2 !== 0) oddNumbersCounter++;
}
console.log('Number of odd numbers in array', oddNumbersCounter)

// Задание 4. Преобразить порядковый номер игральной карты в ее роль
let cards = [5, 11, 12, 13, 10];
for (let i = 0; i < cards.length; i++) {
    switch (cards[i]) {
        case 11:
            cards[i] = 'jack';
            break;
        case 12:
            cards[i] = 'queen';
            break;
        case 13:
            cards[i] = 'king';
            break;
    }
}
console.log('Cards', cards)

// Задание 5 Создание Визитки
function createVisitor(name, age, number) {
    return {
        name,
        age,
        number
    }
}

console.log(createVisitor('Иван Иванович', 24, '89005553535'));

//Задание 6. Удалить минимум
let testArray = [1, 2, 3, 4, 5];
console.log(testArray.sort((a, b) => b - a).pop())
