// Задание 4: Название JavaScript
// Используя конструкцию if..else, напишите код,
// который будет спрашивать: „Какое «официальное» название JavaScript?“
// Если пользователь вводит «ECMAScript», то показать: «Верно!»,
// в противном случае – отобразить: «Не знаете? ECMAScript!»

const value = prompt("What is official name of JavaScript?", "");

if (value === "ECMAScript") {
  console.log("Верно!");
} else {
  console.log("Не знаете? ECMAScript!");
}
