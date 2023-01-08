// Очистите элемент
// важность: 5
// Создайте функцию clear(elem), которая удаляет всё содержимое из elem.

let elem = document.getElementById('elem');

function clear(elem) {
    elem.innerHTML = '';
}

clear(elem); // очищает список

// Создайте список
// важность: 4
// Напишите интерфейс для создания списка.
//
//     Для каждого пункта:
//
//     Запрашивайте содержимое пункта у пользователя с помощью prompt.
//     Создавайте элемент <li> и добавляйте его к <ul>.
// Продолжайте до тех пор, пока пользователь не отменит ввод (нажатием клавиши Esc или введя пустую строку).
// Все элементы должны создаваться динамически.
//
//     Если пользователь вводит HTML-теги, они должны обрабатываться как текст.

function createList() {
    let list = document.createElement('ul');
    let item;
    while (true) {
        item = prompt('Print list item');
        if (!item) {
            break;
        }
        let li = document.createElement('li');
        li.textContent = item;
        list.append(li);
    }
    document.body.append(list);
}

createList();

// Создайте дерево из объекта
// важность: 5
// Напишите функцию createTree, которая создаёт вложенный список ul/li из объекта.

// Выберите один из двух способов решения этой задачи:
//
//     Создать строку, а затем присвоить через container.innerHTML.
//     Создавать узлы через методы DOM.
//     Если получится – сделайте оба.
//
//     P.S. Желательно, чтобы в дереве не было лишних элементов, в частности -– пустых <ul></ul> на нижнем уровне.

let data = {
    "Рыбы": {
        "форель": {},
        "лосось": {}
    },

    "Деревья": {
        "Огромные": {
            "секвойя": {},
            "дуб": {}
        },
        "Цветковые": {
            "яблоня": {},
            "магнолия": {}
        }
    }
};

let container = document.getElementById('container');
let container2 = document.getElementById('container2');

function createTree(container, obj) {
    container.innerHTML = createTreeText(obj);
}

function createTree2(container, obj) {
    container.append(createTreeElem(obj));
}

function createTreeText(obj) { // отдельная рекурсивная функция
    let li = '';
    for (let key in obj) {
        li += '<li>' + key + createTreeText(obj[key]) + '</li>';
    }
    // если li не пустой оборачиваем его в ul
    if (li) {
        let ul = '<ul>' + li + '</ul>'
        return ul;
    }
    return '';
}

function createTreeElem(obj) { // отдельная рекурсивная функция
    // если нет дочерних элементов, то вызов возвращает undefined
    // и элемент <ul> не будет создан
    if (!Object.keys(obj).length) return;
    let ul = document.createElement('ul');

    for (let key in obj) {
        let li = document.createElement('li');
        li.textContent = key;
        const children = createTreeElem(obj[key]);
        if (children) li.append(children)
        ul.append(li);
    }
    return ul;
}

createTree(container, data);
createTree2(container2, data);

// Выведите список потомков в дереве
// важность: 5
// Есть дерево, организованное в виде вложенных списков ul/li.
//
//     Напишите код, который добавит каждому элементу списка <li> количество вложенных в него элементов. Узлы нижнего уровня, без детей – пропускайте.

let liList2 = document.querySelectorAll('li');
for (let li of liList2){
    const childrenQuality = li.querySelectorAll('li').length;
    if (childrenQuality != 0) li.firstChild.data += `[${childrenQuality}]`;
}
