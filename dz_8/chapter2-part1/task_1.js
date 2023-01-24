// Дочерние элементы в DOM
<html>
  <body>
    <div>Пользователи:</div>
    <ul>
      <li>Джон</li>
      <li>Пит</li>
    </ul>
  </body>
</html>;

// Напишите код, как получить…
// элемент <div>?
document.body.firstElementChild;
// <ul>?
document.body.children[1];
// второй <li> (с именем Пит)?
document.body.lastElementChild.lastElementChild;

