//Задание 1
let browser = prompt(`enter name of browser`);
if (browser == `Edge`) сonsole.log("You've got the Edge!");
else if (
  browser == "Chrome" ||
  browser == "Firefox" ||
  browser == "Safari" ||
  browser == "Opera"
) {
  сonsole.log("Okay we support these browsers too");
} else сonsole.log("We hope that this page looks ok!");

//Задание 2
const number = +prompt("Введите число между 0 и 3", "");
switch (number) {
  case 0:
    сonsole.log("Вы ввели число 0");
    break;

  case 1:
    сonsole.log("Вы ввели число 1");
    break;

  case 2:
  case 3:
    сonsole.log("Вы ввели число 2, а может и 3");
  default:
    сonsole.log("А вы не то ввели");
}
