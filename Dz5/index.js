// // 2.4 Переменные
// // 1

// let name = "Джон";

// let admin = name;

// alert( admin );

// //2

// const planetName = "Earth"
// const userName = "Kto-to"

// //2.6 Взаимодействие: alert, prompt, confirm

// const newName = prompt("Твое имя, бро?")

// // alert(newName)

// let a = prompt("Первое число?", 1);
// let b = prompt("Второе число?", 2);

// alert(Number(a) + Number(b));

// // 2.10 Условное ветвление: if, '?'

//3

// let a = prompt("Число", 1)

// if(a > 0){
//     alert("1")
// }else if(a < 0){
//     alert("-1")
// }else{
//     alert(0)
// }

//4

//result = (a + b < 4) ? 'Мало' : 'Много';

//5

// let message = (login == 'Сотрудник') ? 'Привет' :
//   (login == 'Директор') ? 'Здравствуйте' :
//   (login == '') ? 'Нет логина' :
//   '';

//2.11 Логические операторы

//6

// if (age >= 14 && age <= 90)

//7
// if (age < 14 || age > 90)

//9
// let userName = prompt("Кто там?")

// if (userName === 'Админ') {

//   let pass = prompt('Пароль?')

//   if (pass === 'Я главный') {
//     alert( 'Здравствуйте!' )
//   } else if (pass === '' || pass === null) {
//     alert( 'Отменено' )
//   } else {
//     alert( 'Неверный пароль' )
//   }

// } else if (userName === '' || userName === null) {
//   alert( 'Отменено' )
// } else {
//   alert( "Я вас не знаю" );
// }

//2.13 Циклы while и for

//1

// for (let i = 2; i <= 10; i++) {
//     if (i % 2 == 0) {
//       console.log(i);
//     }
//   }

//2

// let i = 0;
// while (i < 3) {
//   alert( `number ${i}!` )
//   i++;
// }

//3

// let number;

// do {
//   num = prompt("Введите число больше 100?", 0);
// } while (num <= 100 && number);

//4


// const prime = (number) => {
//     const array = []
//     for (let i = 2; i <= number; i++) {
//         let isPrime = true;
//         for (let j = 2; j < i; j++) {
//             if (i % j === 0) { isPrime = false; break; }
//         }
//         if (isPrime) array.push(i); // простое число
//     }

//   console.log(array);
// };

// prime(200);


//2.14 Конструкция "switch"

// if(browser == 'Edge') {
//     alert("You've got the Edge!");
//   } else if (browser == 'Chrome'
//    || browser == 'Firefox'
//    || browser == 'Safari'
//    || browser == 'Opera') {
//     alert( 'Okay we support these browsers too' );
//   } else {
//     alert( 'We hope that this page looks ok!' );
//   }

//2
// const number = +prompt('от 0 до 3', '');

// switch (number) {
//   case 0:
//     alert('Вы ввели число 0');
//     break;

//   case 1:
//     alert('Вы ввели число 1');
//     break;

//   case 2:
//   case 3:
//     alert('Вы ввели число 2, а может и 3');
//     break;
// }

//2.15 Функции
//1

// const checkAge = (age) => {
//     return (age > 18) || confirm('Родители разрешили?');
//   }

//2

// const min = (a, b) => {
//     return a < b ? a : b;
//   }

//3

// const pow = (x, n) => {
//     let result = x;
  
//     for (let i = 1; i < n; i++) {
//       result *= x;
//     }
  
//     return result;
//   }
  
//   let x = prompt("x?", '');
//   let n = prompt("n?", '');
  
//   if (n < 1) {
//     alert(`Степень ${n} не поддерживается, используйте натуральное число`);
//   } else {
//     alert( pow(x, n) );
//   }

//2.17 Стрелочные функции 

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }
  
//   ask(
//     "Вы согласны?",
//     () => alert("Вы согласились."),
//     () => alert("Вы отменили выполнение.")
//   );