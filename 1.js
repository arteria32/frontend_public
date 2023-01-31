// 1. Привет мир! ------------------------------------------------------------------
console.log('Я JavaScript!');

// 4. Переменные -------------------------------------------------------------------
// 1
let name1 = 'Джон';
let admin = ''; 
admin = name1;
//alert( name1 );

// 2
let planet_our 
let username_current 

// 3
// Корректно использовать для 'birthday' заглавные буквы, а для 'age' строчные, ввиду того, 
// что дата рождения неизменяема, а возраст постоянно растет и вычисляется по ходу выполнения


// 6. ------------------------------------------------------------------
let name2 = prompt('Как Вас зовут?', '');
alert(`Ваше имя ${name2}`);

//8. Базовые операторы, математика ------------------------------------------------
let a1 = prompt("Первое число?", 1);
let b1 = prompt("Второе число?", 2);
alert(+a1 + +b1);

// 10. Условное ветвление: if, '?' ------------------------------------------------
// 1
let ecma = 
  prompt('Какое «официальное» название JavaScript?', '') == 'ECMAScript' ? 
  alert('Верно!') : alert('Не знаете? ECMAScript!')

// 2
let num = prompt('Ваше число', 0);
if (num < 0) {
  alert(-1);
} else if (num > 0) {
  alert(1);
} else {
  alert(0);
}

// 3
let result, a = 1, b = 1;
(a + b < 4) ? result = 'Мало' : result = 'Много';

// 4
let message;
login == 'Сотрудник' ? message = 'Привет' : 
  (login == 'Директор') ? message = 'Здравствуйте':
    (login == '') ? message = 'Нет логина':  message = ''


// 11. Логические операторы  ------------------------------------------------
// 1
let age1 = 1;
if (14<= age1 <= 90){
  console.log('')
}

// 2 
if (age1 >= 90 || age1 <=14){
  console.log('')
}
if (!age1 >= 90 || !age1 <=14){
  console.log('')
}

// 2
checkLogin = prompt('Кто там?', '')
if (checkLogin === null){
  console.log('Отменено')
}else if (checkLogin === 'Админ'){
  let pswd = prompt('Пароль ', '') 
  pswd === 'Я Главный' ? console.log('Здравствуйте!') :  
    pswd === null ? 'Отменено' : 'Неверный пароль'  
}else{
  console.log('Я вас не знаю')
}



// 13. Циклы while и for  ------------------------------------------------
// 1
for (i=0; i<11;i+=2){
  console.log(i)
}

// 2
i = 6
while (i<3){
  alert( `number ${i}!` );
  i--
}

// 3 
pr1 = 101
do {
  pr1 = prompt("Введите число > 100", '0');
} while (num <= 100 && num=='0');

// 4
let n2 = 10;
for (let i = 2; i <= n2; i++) {
  for (let j = 2; j <= i; j++) {
    if (i / j == 1) {
      console.log(i);
      break;
    } else if (i % j == 0) {
      break;
    } else {
      continue;
    }
  }
}

// 14. Конструкция "switch"  ------------------------------------------------
// 1
if (browser == 'Edge'){
  alert( "You've got the Edge!" );
}else if(browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari'|| browser == 'Opera'){
    alert( 'Okay we support these browsers too' );
}else{
  alert( 'We hope that this page looks ok!' );
}

// 2
const number = +prompt('Введите число между 0 и 3', '');
switch(number){
  case 0:
    alert('Вы ввели число 0');
    break;
  case 1:
    alert('Вы ввели число 1');
    break;
  case 2:
  case 3:
    alert('Вы ввели число 2, а может и 3');
}

// 15. Функции ------------------------------------------------
// 1  
function checkAge(age) {
  age > 18 ? true: confirm('Родители разрешили?');
}
// 2
function min(a,b){
  return(a<b ? a : b)
}

// 3
function pow(a2,b2){
  return a2**b2
}

// 17. Стрелочные функции, основы  ------------------------------------------------
let ask = (question, yes, no) => confirm(question) ? yes() : no();

ask(
  "Вы согласны?",
  function() { alert("Вы согласились."); },
  function() { alert("Вы отменили выполнение."); }
);
