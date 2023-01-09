// =========================================================================================================
// Дочерние элементы в DOM
// Для страницы:
<html>
  <body>
    <div>Пользователи:</div>
    <ul>
      <li>Джон</li>
      <li>Пит</li>
    </ul>
  </body>
</html>;
// Напишите код, как получить:
// элемент <div>?
// <ul>?
// второй <li> (с именем Пит)?

//Ответ:
//div:
document.body.firstElementChild;
// или
document.body.children[0];
// или
document.body.childNodes[1];

//ul
document.body.lastElementChild;
// или
document.body.children[1];

//li
document.body.lastElementChild.lastElementChild;
// =========================================================================================================
// Вопрос о соседях
// Если elem – произвольный узел DOM-элемента…

// Правда, что elem.lastChild.nextSibling всегда равен null?
// Правда, что elem.children[0].previousSibling всегда равен null ?

// Ответ: 1: Да, так как elem.lastChild всегда последний, и у него нет nextSibling.
// 2: Нет, так как elem.children[0] потомок-элемент и перед ним могут быть другие узлы.
// =========================================================================================================
// Выделите ячейки по диагонали
// Напишите код, который выделит красным цветом все ячейки в таблице по диагонали.
// Вам нужно получить из таблицы <table> все диагональные <td> и выделить их, используя код:
// в переменной td находится DOM-элемент для тега <td>
td.style.backgroundColor = 'red';

// Ответ:
<script>
    let table = document.body.firstElementChild;

    for (let i = 0; i < table.rows.length; i++) {
      let row = table.rows[i];
      row.cells[i].style.backgroundColor = 'red';
    }
</script>
// =========================================================================================================
// Поиск элементов
// Вот документ с таблицей и формой.

// Как найти?…
// 1 Таблицу с id="age-table".
// 2 Все элементы label внутри этой таблицы (их три).
// 3 Первый td в этой таблице (со словом «Age»).
// 4 Форму form с именем name="search".
// 5 Первый input в этой форме.
// 6 Последний input в этой форме.

// Ответ:
// 1
let table = document.getElementById('age-table')

// 2
table.getElementsByTagName('label')

// 3
table.querySelector('td')

// 4
document.querySelector('form[name="search"]')

// 5
form.querySelector('input')

// 6
let inputs = form.querySelectorAll('input')
inputs[inputs.length-1]
// =========================================================================================================
// Считаем потомков
// У нас есть дерево, структурированное как вложенные списки ul/li.
// Напишите код, который выведет каждый элемент списка <li>:

// Какой в нём текст (без поддерева) ?
// Какое число потомков – всех вложенных <li> (включая глубоко вложенные) ?

// Ответ:
for (let li of document.querySelectorAll('li')) {
    let content = li.firstChild.data;
    // content содержит текст элемента <li>
}
li.getElementsByTagName('li').length // число потомков
// =========================================================================================================
// Что содержит свойство nodeType?
// Что выведет этот код?
<html>
<body>
  <script>
    alert(document.body.lastChild.nodeType);
  </script>
</body>
</html>

// Ответ: результатом будет 1 (узел-элемент).
// =========================================================================================================
// Тег в комментарии
// Что выведет этот код?
<script>
  let body = document.body;
  body.innerHTML = "<!--" + body.tagName + "-->";
  alert( body.firstChild.data ); // что выведет?
</script>

// Ответ: BODY
// =========================================================================================================
// Где в DOM-иерархии "document"?
// Объектом какого класса является document?
// Какое место он занимает в DOM-иерархии?
// Наследует ли он от Node или от Element, или может от HTMLElement?

// Ответ: document – объект класса HTMLDocument. (alert(document.constructor.name))
// Иерархия узнается следующим образом
alert(HTMLDocument.prototype.constructor.name); // HTMLDocument
alert(HTMLDocument.prototype.__proto__.constructor.name); // Document
alert(HTMLDocument.prototype.__proto__.__proto__.constructor.name); // Node
// =========================================================================================================
// Получите атрибут
// Напишите код для выбора элемента с атрибутом data-widget-name из документа и прочитайте его значение.
<!DOCTYPE html>
<html>
<body>

  <div data-widget-name="menu">Choose the genre</div>

  <script>
    /* your code */
  </script>
</body>
</html>

// Ответ:
<!DOCTYPE html>
<html>
<body>
  <div data-widget-name="menu">Choose the genre</div>
  <script>
    let elem = document.querySelector('[data-widget-name]');
    alert(elem.dataset.widgetName);
  </script>
</body>
</html>
// =========================================================================================================
// Сделайте внешние ссылки оранжевыми
// Сделайте все внешние ссылки оранжевыми, изменяя их свойство style.
// Ссылка является внешней, если:
// Её href содержит ://
// Но не начинается с http://internal.com.
// Пример:
<a name="list">the list</a>
<ul>
  <li><a href="http://google.com">http://google.com</a></li>
  <li><a href="/tutorial">/tutorial.html</a></li>
  <li><a href="local/path">local/path</a></li>
  <li><a href="ftp://ftp.com/my.zip">ftp://ftp.com/my.zip</a></li>
  <li><a href="http://nodejs.org">http://nodejs.org</a></li>
  <li><a href="http://internal.com/test">http://internal.com/test</a></li>
</ul>

<script>
  // добавление стиля для одной ссылки
  let link = document.querySelector('a');
  link.style.color = 'orange';
</script>

// Ответ:
let links = document.querySelectorAll('a');
for (let link of links) {
  let href = link.getAttribute('href');
  if (!href) continue;
  if (!href.includes('://')) continue;
  if (href.startsWith('http://internal.com')) continue;
  link.style.color = 'orange';
}
// =========================================================================================================
// createTextNode vs innerHTML vs textContent
// У нас есть пустой DOM-элемент elem и строка text.

// Какие из этих 3-х команд работают одинаково?

elem.append(document.createTextNode(text))
elem.innerHTML = text
elem.textContent = text

// Ответ: 1 и 3
// =========================================================================================================
// Очистите элемент
// Создайте функцию clear(elem), которая удаляет всё содержимое из elem.

<ol id="elem">
  <li>Привет</li>
  <li>Мир</li>
</ol>

<script>
  function clear(elem) { /* ваш код */ }
  clear(elem); // очищает список
</script>

// Ответ:
function clear(elem) {
    elem.innerHTML = '';
}
// =========================================================================================================
// Почему остаётся "aaa"?
// В примере ниже вызов table.remove() удаляет таблицу из документа.
// Но если вы запустите его, вы увидите, что текст "aaa" все еще виден.
// Почему так происходит?
<table id="table">
  aaa
  <tr>
    <td>Тест</td>
  </tr>
</table>
<script>
  alert(table); // таблица, как и должно быть
  table.remove();
  // почему в документе остался текст "ааа"?
</script>

// Ответ: ааа остается из-за некорректности HTML. Браузер исправил ошибку автоматически,
// но внутри <table> не может быть текста: только табличные теги. Поэтому браузер показывает "aaa" до <table>.
// =========================================================================================================
// Создайте список
// Напишите интерфейс для создания списка.
// Для каждого пункта:
// Запрашивайте содержимое пункта у пользователя с помощью prompt.
// Создавайте элемент <li> и добавляйте его к <ul>.
// Продолжайте до тех пор, пока пользователь не отменит ввод (нажатием клавиши Esc или введя пустую строку).
// Все элементы должны создаваться динамически.
// Если пользователь вводит HTML-теги, они должны обрабатываться как текст.

// Ответ:
<!DOCTYPE HTML>
<html>
<body>
  <h1>Создать список</h1>
  <script>
    let ul = document.createElement('ul');
    document.body.append(ul);
    while (true) {
      let data = prompt("Введите текст для списка списка", "");
      if (!data) {
        break;
      }
      let li = document.createElement('li');
      li.textContent = data;
      ul.append(li);
    }
  </script>
</body>
</html>
// =========================================================================================================
// Создайте дерево из объекта
// Напишите функцию createTree, которая создаёт вложенный список ul/li из объекта.
// Например:

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
// Синтаксис:
let container = document.getElementById('container');
createTree(container, data); // создаёт дерево в контейнере

// Ответ:
<!DOCTYPE html>
<html>
<body>

  <div id="container"></div>

  <script>
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

    function createTree(container, obj) {
      container.innerHTML = createTreeText(obj);
    }

    function createTreeText(obj) {
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

    createTree(container, data);
  </script>
</body>
</html>
// =========================================================================================================
// Выведите список потомков в дереве
// Есть дерево, организованное в виде вложенных списков ul/li.
// Напишите код, который добавит каждому элементу списка <li> количество вложенных в него элементов. Узлы нижнего уровня, без детей – пропускайте.

// Ответ:
<!DOCTYPE HTML>
<html>
<body>

  <ul>
    <li>Животные
      <ul>
        <li>Млекопитающие
          <ul>
            <li>Коровы</li>
            <li>Ослы</li>
            <li>Собаки</li>
            <li>Тигры</li>
          </ul>
        </li>
        <li>Другие
          <ul>
            <li>Змеи</li>
            <li>Птицы</li>
            <li>Ящерицы</li>
          </ul>
        </li>
      </ul>
    </li>
    <li>Рыбы
      <ul>
        <li>Аквариумные
          <ul>
            <li>Гуппи</li>
            <li>Скалярии</li>
          </ul>
        </li>
        <li>Морские
          <ul>
            <li>Морская форель</li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>

  <script>
    let lis = document.getElementsByTagName('li');

    for (let li of lis) {
      let descendantsCount = li.getElementsByTagName('li').length;
      if (!descendantsCount) continue;
      li.firstChild.data += ' [' + descendantsCount + ']';
    }
  </script>

</body>
</html>
// =========================================================================================================
// Создайте календарь в виде таблицы
// Напишите функцию createCalendar(elem, year, month).

// Вызов функции должен создать календарь для заданного месяца month в году year и вставить его в elem.

// Календарь должен быть таблицей, где неделя – это <tr>, а день – это <td>. У таблицы должен быть заголовок с названиями дней недели, каждый день – <th>, первым днём недели должен быть понедельник.

// Ответ:
<!DOCTYPE HTML>
<html>

<head>
  <style>
    table {
      border-collapse: collapse;
    }

    td,
    th {
      border: 1px solid black;
      padding: 3px;
      text-align: center;
    }

    th {
      font-weight: bold;
      background-color: #E6E6E6;
    }
  </style>
</head>

<body>


  <div id="calendar"></div>

  <script>
    function createCalendar(elem, year, month) {

      let mon = month - 1;
      let d = new Date(year, mon);

      let table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';

      for (let i = 0; i < getDay(d); i++) {
        table += '<td></td>';
      }

      while (d.getMonth() == mon) {
        table += '<td>' + d.getDate() + '</td>';

        if (getDay(d) % 7 == 6) {
          table += '</tr><tr>';
        }

        d.setDate(d.getDate() + 1);
      }

      if (getDay(d) != 0) {
        for (let i = getDay(d); i < 7; i++) {
          table += '<td></td>';
        }
      }

      table += '</tr></table>';

      elem.innerHTML = table;
    }

    function getDay(date) {
      let day = date.getDay();
      if (day == 0) day = 7; 
      return day - 1;
    }

    createCalendar(calendar, 2012, 9);
  </script>

</body>
</html>
// =========================================================================================================
// Цветные часы с использованием setInterval
// Создайте цветные часы как в примере ниже

// Ответ:
<!DOCTYPE HTML>
<html>
<head>
  <style>
    .hour {
      color: red
    }

    .min {
      color: green
    }

    .sec {
      color: blue
    }
  </style>
</head>

<body>

  <div id="clock">
    <span class="hour">hh</span>:<span class="min">mm</span>:<span class="sec">ss</span>
  </div>

  <script>
    let timerId;

    function update() {
      let clock = document.getElementById('clock');
      let date = new Date();

      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
      clock.children[0].innerHTML = hours;

      let minutes = date.getMinutes();
      if (minutes < 10) minutes = '0' + minutes;
      clock.children[1].innerHTML = minutes;

      let seconds = date.getSeconds();
      if (seconds < 10) seconds = '0' + seconds;
      clock.children[2].innerHTML = seconds;
    }

    function clockStart() {
      if (!timerId) {
        timerId = setInterval(update, 1000);
      }
      update();
    }

    function clockStop() {
      clearInterval(timerId);
      timerId = null;
    }

  </script>
  <input type="button" onclick="clockStart()" value="Start">
  <input type="button" onclick="clockStop()" value="Stop">
</body>
</html>
// =========================================================================================================
{/* Вставьте HTML в список
Напишите код для вставки <li>2</li><li>3</li> между этими двумя <li>: */}

<ul id="ul">
  <li id="one">1</li>
  <li id="two">4</li>
</ul>

{/* Ответ: */}
one.insertAdjacentHTML('afterend', '<li>2</li><li>3</li>');
// =========================================================================================================
{/* Сортировка таблицы
Вот таблица: */}

<table>
<thead>
  <tr>
    <th>Name</th><th>Surname</th><th>Age</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>John</td><td>Smith</td><td>10</td>
  </tr>
  <tr>
    <td>Pete</td><td>Brown</td><td>15</td>
  </tr>
  <tr>
    <td>Ann</td><td>Lee</td><td>5</td>
  </tr>
  <tr>
    <td>...</td><td>...</td><td>...</td>
  </tr>
</tbody>
</table>
{/* В ней может быть больше строк.
Напишите код для сортировки по столбцу "name". */}

{/* Ответ: */}
let sortedRows = Array.from(table.rows)
  .slice(1)
  .sort((rowA, rowB) => rowA.cells[0].innerHTML > rowB.cells[0].innerHTML ? 1 : -1);

table.tBodies[0].append(...sortedRows);
// =========================================================================================================
{/* Создать уведомление
Напишите функцию showNotification(options), которая создаёт уведомление: <div class="notification"> с заданным содержимым. Уведомление должно автоматически исчезнуть через 1,5 секунды.

Пример объекта options: */}

// показывает элемент с текстом "Hello" рядом с правой верхней частью окна.
showNotification({
  top: 10, // 10px от верхней границы окна (по умолчанию 0px)
  right: 10, // 10px от правого края окна (по умолчанию 0px)
  html: "Hello!", // HTML-уведомление
  className: "welcome" // дополнительный класс для div (необязательно)
});

{/* Используйте CSS-позиционирование для отображения элемента в заданных координатах. Исходный документ имеет необходимые стили. */}

{/* Ответ: */}

<!DOCTYPE HTML>
<html>
<head>
  <link rel="stylesheet" href="index.css">
</head>

<body>

  <h2>Уведомление находится справа</h2>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum aspernatur quam ex eaque inventore quod voluptatem adipisci omnis nemo nulla fugit iste numquam ducimus cumque minima porro ea quidem maxime necessitatibus beatae labore soluta voluptatum
    magnam consequatur sit laboriosam velit excepturi laborum sequi eos placeat et quia deleniti? Corrupti velit impedit autem et obcaecati fuga debitis nemo ratione iste veniam amet dicta hic ipsam unde cupiditate incidunt aut iure ipsum officiis soluta
    temporibus. Tempore dicta ullam delectus numquam consectetur quisquam explicabo culpa excepturi placeat quo sequi molestias reprehenderit hic at nemo cumque voluptates quidem repellendus maiores unde earum molestiae ad.
  </p>

  <script>
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

    // test it
    let i = 1;
    setInterval(() => {
      showNotification({
        top: 10,
        right: 10,
        html: 'Hello ' + i++,
        className: "welcome"
      });
    }, 2000);
  </script>


</body>
</html>
// =========================================================================================================
{/* Найти размер прокрутки снизу
Свойство elem.scrollTop содержит размер прокрученной области при отсчёте сверху. А как подсчитать размер прокрутки снизу (назовём его scrollBottom)?
Напишите соответствующее выражение для произвольного элемента elem.
P.S. Проверьте: если прокрутки нет вообще или элемент полностью прокручен – оно должно давать 0. */}

{/* Ответ: */}
let scrollBottom = elem.scrollHeight - elem.scrollTop - elem.clientHeight;
// =========================================================================================================
{/* Узнать ширину полосы прокрутки
Напишите код, который возвращает ширину стандартной полосы прокрутки.
Для Windows она обычно колеблется от 12px до 20px. Если браузер не выделяет место под полосу прокрутки (так тоже бывает, она может быть прозрачной над текстом), тогда значение может быть 0px.
P.S. Ваш код должен работать в любом HTML-документе, независимо от его содержимого. */}

{/* Ответ: */}
let div = document.createElement('div');

div.style.overflowY = 'scroll';
div.style.width = '50px';
div.style.height = '50px';

document.body.append(div);
let scrollWidth = div.offsetWidth - div.clientWidth;

div.remove();
alert(scrollWidth);
// =========================================================================================================
{/* Поместите мяч в центр поля
Каковы координаты центра поля?

Вычислите их и используйте, чтобы поместить мяч в центр поля: */}

{/* Ответ: */}
<!DOCTYPE HTML>
<html>

<head>
  <style>
    #field {
      width: 200px;
      border: 10px groove black;
      background-color: #00FF00;
      position: relative;
    }

    #ball {
      position: absolute;
    }
  </style>
</head>

<body>


  <div id="field">
    <img src="https://en.js.cx/clipart/ball.svg" width="40" height="40" id="ball"> . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
  </div>


  <script>
    ball.style.left = Math.round(field.clientWidth / 2 - ball.offsetWidth / 2) + 'px'
    ball.style.top = Math.round(field.clientHeight / 2 - ball.offsetHeight / 2) + 'px'
  </script>


</body>

</html>
// =========================================================================================================
{/* В чём отличие CSS-свойств width и clientWidth
В чём отличие между getComputedStyle(elem).width и elem.clientWidth?
Укажите хотя бы 3 отличия, лучше – больше. */}

{/* Ответ: clientWidth возвращает число, а getComputedStyle(elem).width – строку с px на конце.
getComputedStyle не всегда даст ширину, он может вернуть, к примеру, "auto" для строчного элемента.
clientWidth соответствует внутренней области элемента, включая внутренние отступы padding, а CSS-ширина (при стандартном значении box-sizing) соответствует внутренней области без внутренних отступов padding. */}
// =========================================================================================================
{/* Найдите координаты точек относительно окна браузера
В ифрейме ниже располагается документ с зелёным «полем».
Используйте JavaScript, чтобы найти координаты углов, обозначенных стрелками.
В документе уже реализована функциональность, когда при клике на любом месте показываются соответствующие координаты.
Ваш код должен при помощи DOM получить четыре пары координат:
верхний левый, внешний угол (это просто).
нижний правый, внешний угол (тоже просто).
верхний левый, внутренний угол (чуть сложнее).
нижний правый, внутренний угол (есть несколько способов, выберите один).
Координаты, вычисленные вами, должны совпадать с теми, которые возвращаются по клику мыши. */}

{/* Ответ: */}
// внешние углы
let coords = elem.getBoundingClientRect();

let answer1 = [coords.left, coords.top];
let answer2 = [coords.right, coords.bottom];

// верхний левый внутренний угол
let answer = [coords.left + field.clientLeft, coords.top + field.clientTop];

// нижний правый внутренний угол
let answer = [
  coords.right - parseInt(getComputedStyle(field).borderRightWidth),
  coords.bottom - parseInt(getComputedStyle(field).borderBottomWidth)
];
// =========================================================================================================
{/* Покажите заметку рядом с элементом
Создайте функцию positionAt(anchor, position, elem), которая позиционирует элемент elem в зависимости от значения свойства position рядом с элементом anchor.
Аргумент position – строка с одним из 3 значений:
"top" – расположить elem прямо над anchor
"right" – расположить elem непосредственно справа от anchor
"bottom" – расположить elem прямо под anchor
Она используется внутри функции showNote(anchor, position, html), которая уже есть в исходном коде задачи. Она создаёт и показывает элемент-«заметку» с текстом html на заданной позиции position рядом с элементом anchor. */}

{/* Ответ: */}
<!DOCTYPE HTML>
<html>

<head>
  <meta charset="utf-8">
  <link rel="stylesheet" href="index.css">
</head>
<body>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit sint atque dolorum fuga ad incidunt voluptatum error fugiat animi amet! Odio temporibus nulla id unde quaerat dignissimos enim nisi rem provident molestias sit tempore omnis recusandae
    esse sequi officia sapiente.</p>

  <blockquote>
    Teacher: Why are you late?
    Student: There was a man who lost a hundred dollar bill.
    Teacher: That's nice. Were you helping him look for it?
    Student: No. I was standing on it.
  </blockquote>

  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit sint atque dolorum fuga ad incidunt voluptatum error fugiat animi amet! Odio temporibus nulla id unde quaerat dignissimos enim nisi rem provident molestias sit tempore omnis recusandae
    esse sequi officia sapiente.</p>

  <script>
    function positionAt(anchor, position, elem) {

      let anchorCoords = anchor.getBoundingClientRect();

      switch (position) {
        case "top":
          elem.style.left = anchorCoords.left + "px";
          elem.style.top = anchorCoords.top - elem.offsetHeight + "px";
          break;

        case "right":
          elem.style.left = anchorCoords.left + anchor.offsetWidth + "px";
          elem.style.top = anchorCoords.top + "px";
          break;

        case "bottom":
          elem.style.left = anchorCoords.left + "px";
          elem.style.top = anchorCoords.top + anchor.offsetHeight + "px";
          break;
      }

    }
    function showNote(anchor, position, html) {
      let note = document.createElement('div');
      note.className = "note";
      note.innerHTML = html;
      document.body.append(note);
      positionAt(anchor, position, note);
    }

    let blockquote = document.querySelector('blockquote');

    showNote(blockquote, "top", "note above");
    showNote(blockquote, "right", "note at the right");
    showNote(blockquote, "bottom", "note below");
  </script>
</body>
</html>
// =========================================================================================================
{/* Покажите заметку около элемента (абсолютное позиционирование)
Измените код решения предыдущего задания так, чтобы элемент заметки использовал свойство position:absolute вместо position:fixed.
Это предотвратит расхождение элементов при прокрутке страницы.
Используйте решение предыдущего задания для начала. Чтобы проверить решение в условиях с прокруткой, добавьте стиль элементу <body style="height: 2000px">. */}

{/* Ответ: всё тоже самое, только position:absolute в CSS вместо position:fixed для элемента с классом .note и используется функция
getCoords() чтобы получить координаты относительно документа.*/}
// =========================================================================================================
{/* Расположите заметку внутри элемента (абсолютное позиционирование)
Усовершенствуйте решение предыдущего задания Покажите заметку около элемента (абсолютное позиционирование): научите функцию positionAt(anchor, position, elem) вставлять elem внутрь anchor.
Новые значения для аргумента position:
top-out, right-out, bottom-out – работают так же, как раньше, они вставляют elem сверху/справа/снизу anchor.
top-in, right-in, bottom-in – вставляют elem внутрь anchor: приклеивают его к верхнему/правому/нижнему краю.
Например:
// показывает заметку поверх цитаты
positionAt(blockquote, "top-out", note);

// показывает заметку внутри цитаты вблизи верхнего края элемента
positionAt(blockquote, "top-in", note); */}

{/* Ответ: */}
<!DOCTYPE HTML>
<html>

<head>
  <meta charset="utf-8">
  <link rel="stylesheet" href="index.css">
</head>

<body style="height: 2000px">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit sint atque dolorum fuga ad incidunt voluptatum error fugiat animi amet! Odio temporibus nulla id unde quaerat dignissimos enim nisi rem provident molestias sit tempore omnis recusandae
    esse sequi officia sapiente.</p>

  <blockquote>
    Teacher: Why are you late?
    Student: There was a man who lost a hundred dollar bill.
    Teacher: That's nice. Were you helping him look for it?
    Student: No. I was standing on it.
  </blockquote>

  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit sint atque dolorum fuga ad incidunt voluptatum error fugiat animi amet! Odio temporibus nulla id unde quaerat dignissimos enim nisi rem provident molestias sit tempore omnis recusandae
    esse sequi officia sapiente.</p>
  <script>
    function getCoords(elem) {
      let box = elem.getBoundingClientRect();

      return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
      };
    }

    function showNote(anchor, position, html) {
      let note = document.createElement('div');
      note.className = "note";
      note.innerHTML = html;
      document.body.append(note);

      positionAt(anchor, position, note);
    }
    function positionAt(anchor, position, elem) {
      let anchorCoords = getCoords(anchor);
      switch (position) {
        case "top-out":
          elem.style.left = anchorCoords.left + "px";
          elem.style.top = anchorCoords.top - elem.offsetHeight + "px";
          break;
        case "right-out":
          elem.style.left = anchorCoords.left + anchor.offsetWidth + "px";
          elem.style.top = anchorCoords.top + "px";
          break;
        case "bottom-out":
          elem.style.left = anchorCoords.left + "px";
          elem.style.top = anchorCoords.top + anchor.offsetHeight + "px";
          break;
        case "top-in":
          elem.style.left = anchorCoords.left + "px";
          elem.style.top = anchorCoords.top + "px";
          break;
        case "right-in":
          elem.style.width = '150px';
          elem.style.left = anchorCoords.left + anchor.offsetWidth - elem.offsetWidth + "px";
          elem.style.top = anchorCoords.top + "px";
          break;
        case "bottom-in":
          elem.style.left = anchorCoords.left + "px";
          elem.style.top = anchorCoords.top + anchor.offsetHeight - elem.offsetHeight + "px";
          break;
      }

    }
    let blockquote = document.querySelector('blockquote');
    showNote(blockquote, "top-in", "note top-in");
    showNote(blockquote, "top-out", "note top-out");
    showNote(blockquote, "right-out", "note right-out");
    showNote(blockquote, "bottom-in", "note bottom-in");
  </script>


</body>
</html>
// =========================================================================================================
