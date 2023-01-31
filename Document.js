// Выделите ячейки по диагонали
let table = document.body.firstElementChild;

for (let i = 0; i < table.rows.length; i++) 
{
    let row = table.rows[i];
    row.cells[i].style.backgroundColor = 'red';
}



// Поиск элементов
let table1 = document.getElementById('age-table');



// Считаем потомков
for (let li of document.querySelectorAll('li')) 
{
  let title = li.firstChild.data;
}



// Получите атрибут
let elem = document.querySelector('[data-widget-name]');
alert(elem.dataset.widgetName);
alert(elem.getAttribute('data-widget-name'));



// Сделайте внешние ссылки оранжевыми
let links = document.querySelectorAll('a');

for (let link of links) 
{
  let href = link.getAttribute('href');
  if (!href) continue;
  if (!href.includes('://')) continue;
  if (href.startsWith('http://internal.com')) continue;
  link.style.color = 'orange';
}



// Очистите элемент
function clear(elem) 
{
    elem.innerHTML = '';
}



// Создайте список
let ul = document.createElement('ul');
document.body.append(ul);

while (true) 
{
    let data = prompt("Введите текст для элемента списка", "");
    if (!data) 
    {
        break;
    }
    let li = document.createElement('li');
    li.textContent = data;
    ul.append(li);
}



// Выведите список потомков в дереве
let lis = document.getElementsByTagName('li');

for (let li of lis) 
{
    let descendantsCount = li.getElementsByTagName('li').length;
    if (!descendantsCount) continue;
    li.firstChild.data += ' [' + descendantsCount + ']';
}


// Вставьте HTML в список
one.insertAdjacentHTML('afterend', '<li>2</li><li>3</li>');



// Создать уведомление
function showNotification({top = 0, right = 0, className, html}) 
{

  let notification = document.createElement('div');
  notification.className = "notification";
  if (className) 
  {
    notification.classList.add(className);
  }
  notification.style.top = top + 'px';
  notification.style.right = right + 'px';
  notification.innerHTML = html;
  document.body.append(notification);
  setTimeout(() => notification.remove(), 1500);
}

// Найти размер прокрутки снизу
let scrollBottom = elem.scrollHeight - elem.scrollTop - elem.clientHeight;