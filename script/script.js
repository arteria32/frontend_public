//Задание 2.1 (2 способ)
alert("Я JavaScript!")

//Задание 2.4 (Работа с переменными)
let admin, name;
name = "Джон";
admin = name;
alert(admin)

//Задание 2.4 (Придумайте правильные имена)
let nameOurPlanet = "Земля";
let currentUserOnline = "Алексей";

//Задание 2.6 (Простая страница)  
let name = prompt("Как тебя зовут");
alert(`Приветствую, ${name}!`)

//Задание 2.8 (Исправьте сложение)  
let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);
alert(+a + +b);

//Задание 2.10 (Название JavaScript) 
let oficialName = "ECMAScript";
let userAnswer = prompt("Какое «официальное» название JavaScript?","");
if (userAnswer == oficialName) {
    alert("Верно!");
}
else {
    alert("Не знаете? ECMAScript!")
}

//Задание 2.10 (Покажите знак числа) 
let userAnswer = prompt("Введите любое число","");
if (userAnswer > 0) {
    alert("1");
}
else if (userAnswer < 0) {
    alert("-1");
} else {
    alert("0")
}

//Задание 2.10 (Перепишите 'if' в '?') 
result = (a + b < 4) ? 'Мало' : 'Много';

//Задание 2.10 (Перепишите 'if..else' в '?') 
let message = (login == 'Сотрудник') ? 'Привет' :
  (login == 'Директор') ? 'Здравствуйте' :
  (login == '') ? 'Нет логина' :
  '';

//Задание 2.11 (Проверка значения из диапазона) 
let age = prompt ("Сколько Вам лет?","");
if (age>=14 && age<=90) {
    alert("Условие выполнено");
}
else {
    alert("Условие не выполнено");
}

//Задание 2.11 (Проверка значения вне диапазона) 
let age = prompt ("Сколько Вам лет?","");
if (!(age>=14 && age<=90)) {
    alert("Условие выполнено");
}
else {
    alert("Условие не выполнено");
}

//Задание 2.11 (Проверка логина)
let login = "Админ";
let password = "Я главный!";
let userPassword;
let userLogin = prompt("Кто там?","");
if (userLogin == login) {
    userPassword = prompt("Пароль?","")
    if (userPassword == password) {
        alert("Здравствуйте!");
    } else if (userPassword === "" || userPassword === null) {
        alert("Отменено");
    } else {
        alert("Неверный пароль");
    }
} else if (userLogin == "" || userLogin == null) {
    alert("Отменено");
} else {
    alert("Я вас не знаю");
}

//Задание 2.13 (Выведите чётные числа)
for (let i = 1; i <= 10; i++) {
    if (i % 2 != 0) continue;
    console.log(i);
}

//Задание 2.13 (Замените for на while)
let i = 0;
while (i<3) {
    console.log(`number ${++i}!`)
}

//Задание 2.13 (Повторять цикл, пока ввод неверен)
let userNumber = prompt("Введите число, большее 100","");
while (userNumber < 100) {
    userNumber = prompt("Введите число, большее 100","");
    if (typeof(userNumber) == null) break ;
}

if (typeof(userNumber) == NaN) {
    alert(`Вы ввели не число!`)
}   else alert(`Вы ввели ${userNumber}!`)

//Задание 2.13 (Вывести простые числа)
let n = 10;
nextPrime:
for (let i = 2; i <= n; i++) { 
  for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue nextPrime; 
  }
  alert( i ); 
}

//Задание 2.14 (Напишите "if", аналогичный "switch")
switch (browser) {
    case 'Edge':
      alert( "You've got the Edge!" );
      break;
    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
      alert( 'Okay we support these browsers too' );
      break;
    default:
      alert( 'We hope that this page looks ok!' );
  }

//Задание 2.14 (Переписать условия "if" на "switch")
const number = +prompt('Введите число между 0 и 3', '');
switch (number) {
  case 0:
    alert('Вы ввели число 0');
    break;
  case 1:
    alert('Вы ввели число 1');
    break;
  case 2:
  case 3:
    alert('Вы ввели число 2, а может и 3');
    break;
}

//Задание 2.15 (Перепишите функцию, используя оператор '?' или '||')
function checkAge(age) {
    return (age > 18) ? true : confirm('Родители разрешили?');
  }

function checkAge(age) {
  return (age > 18) || confirm('Родители разрешили?');
}

//Задание 2.15 (Функция min(a, b))
function min(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
  }

//Задание 2.15 (Функция pow(x,n))
function pow(x, n) {
    let result = x;
    for (let i = 1; i < n; i++) {
      result *= x;
    }
    return result;
  }

  let x = prompt("x?", '');
  let n = prompt("n?", '');
  if (n < 1) {
    alert(`Степень ${n} не поддерживается, используйте натуральное число`);
  } else {
    alert( pow(x, n) );
  }

//Задание 2.17 (Перепишите с использованием функции-стрелки)
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  ask(
    "Вы согласны?",
    () => alert("Вы согласились."),
    () => alert("Вы отменили выполнение.")
  );