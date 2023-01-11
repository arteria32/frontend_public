// Навигация по DOM-элементам
// let table = document.body.firstElementChild;

// for (let i = 0; i < table.rows.length; i++) {
//   let row = table.rows[i];
//   row.cells[i].style.backgroundColor = 'red';
// }

// Поиск элементов
// let table = document.getElementById('age-table');

// Считаем потомков
// for (let li of document.querySelectorAll('li')) {
//   let title = li.firstChild.data;
// }

// Получите атрибут
//  let elem = document.querySelector('[data-widget-name]');
//  alert(elem.dataset.widgetName);
//  alert(elem.getAttribute('data-widget-name'));

// Сделайте внешние ссылки оранжевыми
// let links = document.querySelectorAll('a');

// for (let link of links) {
//   let href = link.getAttribute('href');
//   if (!href) continue;
//   if (!href.includes('://')) continue;
//   if (href.startsWith('http://internal.com')) continue;
//   link.style.color = 'orange';
// }

// Создать уведомление

// function showNotification({top = 0, right = 0, className, html}) {

//   let notification = document.createElement('div');
//   notification.className = "notification";
//   if (className) {
//     notification.classList.add(className);
//   }
//   notification.style.top = top + 'px';
//   notification.style.right = right + 'px';
//   notification.innerHTML = html;
//   document.body.append(notification);
//   setTimeout(() => notification.remove(), 1500);
// }

// Найти прокрутку снизу
// let scrollBottom = elem.scrollHeight - elem.scrollTop - elem.clientHeight;
