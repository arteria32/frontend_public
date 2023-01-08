// У нас есть дерево, структурированное как вложенные списки ul/li.
//
//     Напишите код, который выведет каждый элемент списка <li>:
//
// Какой в нём текст (без поддерева) ?
//     Какое число потомков – всех вложенных <li> (включая глубоко вложенные) ?

let liList = document.querySelectorAll('li');
for (let li of liList){
    console.log(li.innerText.split('\n')[0])
    console.log('число потомков:', li.querySelectorAll('li').length);
}
