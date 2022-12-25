//Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.
//Для вывода используйте alert.

let date = new Date(2012, 1, 20, 3, 12);
alert(date);

/*Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца. Иногда это 30, 31 или даже февральские 28/29.

Параметры:

year – год из четырёх цифр, например, 2012.
month – месяц от 0 до 11.
К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).*/
function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
  }

console.log(getLastDayOfMonth(2004, 0) );
console.log(getLastDayOfMonth(2004, 1) );
console.log(getLastDayOfMonth(2004, 2) ); 
console.log(getLastDayOfMonth(2004, 3) ); 
console.log(getLastDayOfMonth(2004, 4) ); 
console.log(getLastDayOfMonth(2004, 5) ); 