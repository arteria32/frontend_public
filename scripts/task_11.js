//Задание 1
// if (a >= 14 && a <= 90);

// //Задание 2
// if (!(a >= 14 && a <= 90));

//Задание 3
let login = prompt(`Enter login`);
if (login == `Admin`) {
  let password = prompt(`Enter password`);
  if (password == `Я Главный`) сonsole.log(`Здравствуйте`);
  else if (password == `` || password == null) сonsole.log(`Отмена`);
  else сonsole.log(`Неверный пароль`);
}
else if (login == `` || login == null) сonsole.log(`Отмена`);
else сonsole.log(`Я вас не знаю`);
