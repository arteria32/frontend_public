// Встроенная функция setTimeout использует колбэк-функции. Создайте альтернативу, 
// использующую промисы.

// Функция delay(ms) должна возвращать промис, который перейдёт в состояние «выполнен» 
// через ms миллисекунд, так чтобы мы могли добавить к нему .then:

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

//    Перепишите функцию showCircle, написанную в задании Анимация круга с помощью колбэка
//    таким образом, чтобы она возвращала промис, вместо того чтобы принимать в аргументы 
//    функцию-callback.

  function showCircle(cx, cy, radius) {
    let div = document.createElement('div');

    div.style.width = 0;
    div.style.height = 0;
    div.style.left = cx + 'px';
    div.style.top = cy + 'px';
    div.className = 'circle';
    document.body.append(div);

    return new Promise(resolve => {
      setTimeout(() => {
        div.style.width = radius * 2 + 'px';
        div.style.height = radius * 2 + 'px';

        div.addEventListener('transitionend', function handler() {
          div.removeEventListener('transitionend', handler);
          resolve(div);
        });
      }, 0);
    })
  }

//   Перепишите один из примеров раздела Цепочка промисов, используя async/await вместо .then/catch:

async function loadJson(url) {
    let response = await fetch(url); 
  
    if (response.status == 200) {
      let json = await response.json(); 
      return json;
    }
  
    throw new Error(response.status);
  }
  
//   В функции demoGithubUser замените рекурсию на цикл: используя async/await, сделать это будет просто.

async function demoGithubUser() {
    let user;
    while(true) {
      let name = prompt("Введите логин?", "iliakan");
      try {
        user = await loadJson(`https://api.github.com/users/${name}`);
        break; 
      } catch(err) {
        if (err instanceof HttpError && err.response.status == 404) {
          alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
        } else {
          throw err;
        }
      }
    }
}

//  Есть «обычная» функция. Как можно внутри неё получить результат выполнения async–функции?

async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return 10;
  }
  
  function f() {
    wait().then(result => alert(result));
  }

  //Считаем потомков 
//   for (let li of document.querySelectorAll('li')) {
//     let title = li.firstChild.data;
//   }

  //Получите атрибут
//   let elem = document.querySelector('[data-widget-name]');


//Оранжевые ссылки
// let links = document.querySelectorAll('a');

// for (let link of links) {
//   let href = link.getAttribute('href');
//   if (!href) continue; 
//   if (!href.includes('://')) continue; 
//   if (href.startsWith('http://internal.com')) continue; 
//   link.style.color = 'orange';
// }

//Создайте функцию clear(elem), которая удаляет всё содержимое из elem.
function clear(elem) {
    elem.innerHTML = '';
  }

// Список потомков
  function createTree(container, obj) {
    container.innerHTML = createTreeText(obj);
  }

  function createTreeText(obj) { // отдельная рекурсивная функция
    let li = '';
    let ul;
    for (let key in obj) {
      li += '<li>' + key + createTreeText(obj[key]) + '</li>';
    }
    if (li) {
      ul = '<ul>' + li + '</ul>'
    }
    return ul || '';
  }

// Создать уведомление
  function showNotification({top = 0, right = 0, className, html}) {

    let notification = document.createElement('div');
    notification.className = "notification";
    if (className) {
      notification.classList.add(className);
    }

    notification.style.top = top + 'px';
    notification.style.right = right + 'px';

    notification.innerHTML = html;
    document.body.append(notification);

    setTimeout(() => notification.remove(), 1500);
  }
