// Задание 10: Проверка логина
// Напишите код, который будет спрашивать логин с помощью prompt.
// Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата
// клавиша Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю».
// Пароль проверять так:
//   1. Если введён пароль «Я главный», то выводить «Здравствуйте!»,
//   2. Иначе – «Неверный пароль»,
//   3. При отмене – «Отменено».
// Для решения используйте вложенные блоки if. Обращайте внимание на стиль и читаемость кода.
// Подсказка: передача пустого ввода в приглашение prompt возвращает пустую строку ''.
// Нажатие клавиши Esc во время запроса возвращает null.

const login = prompt("Кто там?", "");

if (login === "Админ") {
  const password = prompt("Пароль?", "");

  if (password === "Я главный") {
    console.log("Здравствуйте!");
  } else if (password === "" || password === null) {
    console.log("Отменено");
  } else {
    console.log("Неверный пароль");
  }
} else if (login === "" || login === null) {
  console.log("Отменено");
} else {
  console.log("Я вас не знаю");
}