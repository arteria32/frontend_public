// Операции с массивами
// важность: 5
// Давайте произведём 5 операций с массивом.
//
//     Создайте массив styles с элементами «Джаз» и «Блюз».
// Добавьте «Рок-н-ролл» в конец.
//     Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
//     Удалите первый элемент массива и покажите его.
//     Вставьте Рэп и Регги в начало массива.
//     Массив по ходу выполнения операций:
//
//     Джаз, Блюз
// Джаз, Блюз, Рок-н-ролл
// Джаз, Классика, Рок-н-ролл
// Классика, Рок-н-ролл
// Рэп, Регги, Классика, Рок-н-ролл

styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-ролл');
let stylesLength = styles.length;
styles[(stylesLength % 2 === 0) ? (stylesLength / 2) + 1 : stylesLength / 2] = 'Классика';
console.log(styles.shift())
styles.unshift('Рэп', 'Регги');

// Сумма введённых чисел
// важность: 4
// Напишите функцию sumInput(), которая:
//
// Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
//     Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.
//     P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».
function sumInput() {
    let array = [];
    let sum = 0;
    while (true) {
        item = +prompt('Num');
        if (item === "" || item === null || !isFinite(item)) break;
        array.push(item);
        sum += item;
    }
    return sum;
}


// Подмассив наибольшей суммы
// важность: 2
// На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].
//
//     Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.
//
//     Функция getMaxSubSum(arr) должна возвращать эту сумму.
//
//     Например:
//
// getMaxSubSum([-1, 2, 3, -9]) == 5 (сумма выделенных элементов)
// getMaxSubSum([2, -1, 2, 3, -9]) == 6
// getMaxSubSum([-1, 2, 3, -9, 11]) == 11
// getMaxSubSum([-2, -1, 1, 2]) == 3
// getMaxSubSum([100, -9, 2, -3, 5]) == 100
// getMaxSubSum([1, 2, 3]) == 6 (берём все)
// Если все элементы отрицательные – ничего не берём(подмассив пустой) и сумма равна «0»:
//
// getMaxSubSum([-1, -2, -3]) = 0
// Попробуйте придумать быстрое решение: O(n2), а лучше за О(n) операций.

function getMaxSubSum(arr) {
    let maxSubSum = 0;
    let partialSubSum = 0;

    for (let item of arr) {
        partialSubSum += item;
        maxSubSum = Math.max(maxSubSum, partialSubSum);
        if (partialSubSum < 0) partialSubSum = 0;
    }

    return maxSubSum;
}

alert(getMaxSubSum([-1, 2, 3, -9])); // 5
alert(getMaxSubSum([-1, 2, 3, -9, 11])); // 11
alert(getMaxSubSum([-2, -1, 1, 2])); // 3
alert(getMaxSubSum([100, -9, 2, -3, 5])); // 100
alert(getMaxSubSum([1, 2, 3])); // 6
alert(getMaxSubSum([-1, -2, -3])); // 0


// Переведите текст вида border-left-width в borderLeftWidth
// важность: 5
// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
//
// То есть дефисы удаляются, а все слова после них получают заглавную букву.
function ucFirst(str) {
    let changedStr = str[0].toUpperCase() + str.slice(1);
    return changedStr;
}

function camelize(str) {
    return str
        .split('-')
        .map((word, index) => {
            return (index === 0) ? word : ucFirst(word);
        }).join('');
}

console.log(camelize("background-color") == 'backgroundColor');
console.log(camelize("list-style-image") == 'listStyleImage');
console.log(camelize("-webkit-transition") == 'WebkitTransition');


// Фильтрация по диапазону
// важность: 4
// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет элементы со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива.
//
//     Функция должна возвращать новый массив и не изменять исходный.
function filterRange(arr, a, b) {
    return arr.filter((item) => item >= a && item <= b)
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert(filtered); // 3,1 (совпадающие значения)

alert(arr); // 5,3,8,1 (без изменений)

// Фильтрация по диапазону "на месте"
// важность: 4
// Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.
//
//     Функция должна изменять принимаемый массив и ничего не возвращать.

let arr2 = [5, 3, 8, 1];

filterRangeInPlace(arr2, 1, 4); // удалены числа вне диапазона 1..4

alert(arr2); // [3, 1]

function filterRangeInPlace(arr, a, b) {
    arr.forEach((item, i) => {
        if (item < a || item > b) {
            arr.splice(i, 1);
        }
    })
}

// Сортировать в порядке по убыванию
let arr3 = [5, 2, 1, -10, 8];

arr3.sort((item1, item2) => item2 - item1)

alert(arr3); // 8, 5, 2, 1, -10

// Скопировать и отсортировать массив
// У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.
//
//     Создайте функцию copySorted(arr), которая будет возвращать такую копию.
function copySorted(arr) {
    return arr
        .slice()
        .sort();
}

let arr4 = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr4);

console.log(sorted); // CSS, HTML, JavaScript
console.log(arr4 ); // HTML, JavaScript, CSS (без изменений)

// Трансформировать в массив имён
// важность: 5
// У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(user => user.name);

    alert( names ); // Вася, Петя, Маша

// Трансформировать в объекты
// важность: 5
// У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.
//
//     Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName – состоит из name и surname.

let vasya2 = { name: "Вася", surname: "Пупкин", id: 1 };
let petya2 = { name: "Петя", surname: "Иванов", id: 2 };
let masha2 = { name: "Маша", surname: "Петрова", id: 3 };

let users2 = [ vasya2, petya2, masha2 ];

let usersMapped = users2.map((user) => {
        return {
            fullName: user.name + ' ' + user.surname,
            id: user.id
        }
    }
)
alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // Вася Пупкин

// Отсортировать пользователей по возрасту
// важность: 5
// Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.
function sortByAge(arr) {
    arr.sort((user1, user2) => user1.age - user2.age);
}
sortByAge(users);

// теперь: [vasya, masha, petya]
alert(users[0].name); // Вася
alert(users[1].name); // Маша
alert(users[2].name); // Петя

// Получить средний возраст
// важность: 4
// Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.
//
//     Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.

function getAverageAge(arr) {
    return arr.reduce((sum, user) => {
        return sum + user.age
    }, 0)/arr.length
}

alert( getAverageAge(users) ); // (25 + 30 + 29) / 3 = 28

// Оставить уникальные элементы массива
// важность: 4
// Пусть arr – массив строк.
//
//     Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.


function unique(arr) {
    return Array.from(new Set(arr));
}

let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];

// alert( unique(strings) ); // кришна, харе, :-O
//
// Создайте объект с ключами из массива
// важность: 4
// Допустим, мы получили массив пользователей в виде {id:..., name:..., age:... }.
//
// Создайте функцию groupById(arr), которая создаст из него объект с id в качестве ключа и элементами массива в качестве значений.

function groupById(arr) {
    return arr.reduce((usersById, user) => {
        usersById[user.id] = user;
        return usersById;
    }, {})
}

let users5 = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users5);
console.log(usersById)
/*
// после вызова у нас должно получиться:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/
