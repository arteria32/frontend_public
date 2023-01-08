// Дочерние элементы в DOM
// важность: 5
// Для страницы:
//
//     <html>
// <body>
// <div>Пользователи:</div>
// <ul>
// <li>Джон</li>
// <li>Пит</li>
// </ul>
// </body>
// </html>
// Напишите код, как получить…
//
// элемент <div>?
// <ul>?
//     второй <li> (с именем Пит)?

console.log(document.body.firstElementChild);
console.log(document.body.children[1]);
console.log(document.body.children[1].lastElementChild);


// Выделите ячейки по диагонали
// важность: 5
// Напишите код, который выделит красным цветом все ячейки в таблице по диагонали.
//
//     Вам нужно получить из таблицы <table> все диагональные <td> и выделить их, используя код:
//
// //  в переменной td находится DOM-элемент для тега <td>
//     td.style.backgroundColor = 'red';

let rows = document.body.children[2].rows

for (let i = 0; i < rows.length; i++) {
    let row = rows[i];
    row.cells[i].style.backgroundColor = 'red';
}
