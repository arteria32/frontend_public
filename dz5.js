alertHelloWorld = () => alert("Привет, мир!");

alertAdmin = () => {
  let admin;
  let name = "Джон";
  admin = name;
  alert(admin);
};

createNames = () => {
  let ourPlanetName = "Земля";
  let currentUserName = "Джон";
  alert(`Наша планета называется ${ourPlanetName}, имя переменной: "ourPlanetName"
Текущий посититель сайта: ${currentUserName}, имя переменной: "currentUserName"`);
};

getUserName = () => {
  let name = prompt("Ваше имя?", "");
  alert(name);
};

getSum = () => {
  let a = +prompt("Ведите перове число", "");
  let b = +prompt("Введите второе число", "");
  alert(a + b);
};

checkValueFromRange = () => {
  let age = prompt("Введите возраст от 14 до 90", "");
  if (age >= 14 && age <= 90) {
    alert("Число входит в диапазон");
  } else {
    alert("Число НЕ входит в диапазон");
  }
};

checkValueOutOfRange = () => {
  let age = prompt("Введите возраст", "");

  if (!(age >= 14 && age <= 90)) {
    alert("Число НЕ входит в диапазон");
  } else {
    alert("Число входит в диапазон");
  }

  // Вариант 2:
  // if (age < 14 || age > 90) {
  //    alert("Число НЕ входит в диапазон");
  //  } else {
  //    alert("Число входит в диапазон");
  //  }
};

checkLogin = () => {
  let login = prompt("Введите логин", "");
  if (login === "Админ") {
    let password = prompt("Пароль?", "");

    if (password === "Я главный") {
      alert("Здравствуйте!");
    } else if (password === "" || password === null) {
      alert("Отменено");
    } else {
      alert("Неверный пароль");
    }
  } else if (login === "" || login === null) {
    alert("Отменено");
  } else {
    alert("Я вас не знаю");
  }
};

alertEvenNumbers = () => {
  // При помощи цикла for выведите чётные числа от 2 до 10.
  for (i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
      alert(i);
    }
  }
};

alertNumbers = () => {
  // Перепишите код, заменив цикл for на while, без изменения поведения цикла.
  // for (let i = 0; i < 3; i++) {
  //    alert( `number ${i}!` );
  //  }
  let i = 0;
  while (i < 3) {
    alert(`number ${i}!`);
    i++;
  }
};

getNumber = () => {
  let number;

  do {
    number = prompt("Введите число больше 100?", 0);
  } while (number <= 100 && number);
};

printPrimeNumbers = () => {
  let number = prompt("Введите число", "");
  let arrayOfPrimeNumbers = [];

  for (j = 2; j <= number; j++) {
    let i = 2;
    while (i < j) {
      if (j % i == 0) {
        break;
      }
      i++;
    }
    if (i == j) arrayOfPrimeNumbers.push(j);
  }
  alert(arrayOfPrimeNumbers);
};

switchToIf = () => {
  alert(`
  if (browser == "Edge") {
    alert("You've got the Edge!");
  } else if (
    browser == "Chrome" ||
    browser == "Firefox" ||
    browser == "Safari" ||
    browser == "Opera"
  ) {
    alert("Okay we support these browsers too");
  } else {
    alert("We hope that this page looks ok!");
  }`);
};

ifToSwitch = () => {
  const number = +prompt("Введите число между 0 и 3", "");

  switch (number) {
    case 0:
      alert("Вы ввели число 0");
      break;
    case 1:
      alert("Вы ввели число 1");
      break;
    case 2:
    case 3:
      alert("Вы ввели число 2, а может и 3");
      break;
  }
};

getAge = () => {
  userAge = prompt("Введите возраст", "");
  checkAge(userAge);
};

function checkAge(age) {
  age > 18 ? true : confirm("Родители разрешили?");
  //  или
  // return (age > 18) || confirm('Родители разрешили?');
}

getNumbersForMin = () => {
  a = +prompt("Введите а", "");
  b = +prompt("Введите b", "");
  alert(min(a, b));
};

min = (a, b) => (a < b ? a : b);

getNumbersForPow = () => {
  x = +prompt("Введите x", "");
  n = +prompt("Введите n", "");
  if (n !== Math.round(n) || n < 1) {
    alert("Введите целое число");
    n = +prompt("Введите n", "");
  }
  alert(pow(x, n));
};

pow = (x, n) => {
  let res = x;
  for (i = 1; i < n; i++) {
    res = res * x;
  }
  return res;
};

function showArrowFunc() {
  alert(`
  function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  ask(
    "Вы согласны?",
    () => alert("Вы согласились."),
    () => alert("Вы отменили выполнение.")
  );
  `);
}
