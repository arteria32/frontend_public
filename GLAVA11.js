// Задержка на промисах

// function delay(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }
// delay(3000).then(() => alert('выполнилось через 3 секунды'));

// function go() {
//   showCircle(150, 150, 100).then((div) => {
//     div.classList.add('message-ball');
//     div.append('Hello, world!');
//   });
// }

// Анимация круга с помощью промиса

// function showCircle(cx, cy, radius) {
//   let div = document.createElement('div');
//   div.style.width = 0;
//   div.style.height = 0;
//   div.style.left = cx + 'px';
//   div.style.top = cy + 'px';
//   div.className = 'circle';
//   document.body.append(div);

//   return new Promise((resolve) => {
//     setTimeout(() => {
//       div.style.width = radius * 2 + 'px';
//       div.style.height = radius * 2 + 'px';

//       div.addEventListener('transitionend', function handler() {
//         div.removeEventListener('transitionend', handler);
//         resolve(div);
//       });
//     }, 0);
//   });
// }

// ПРОМИСЫ ОБРАБОТКА ОШИБОК

// new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     throw new Error('Whoops!');
//   }, 1000);
// }).catch(alert);

//Перепишите, используя async/await

1;
// function loadJson(url) {
//   return fetch(url).then((response) => {
//     if (response.status == 200) {
//       return response.json();
//     } else {
//       throw new Error(response.status);
//     }
//   });
// }
// loadJson('no-such-user.json').catch(alert);

2;
// class HttpError extends Error {
//   constructor(response) {
//     super(`${response.status} for ${response.url}`);
//     this.name = 'HttpError';
//     this.response = response;
//   }
// }
// async function loadJson(url) {
//   let response = await fetch(url);
//   if (response.status == 200) {
//     return response.json();
//   } else {
//     throw new HttpError(response);
//   }
// }
// async function demoGithubUser() {
//   let user;
//   while (true) {
//     let name = prompt('Введите логин?', 'iliakan');
//     try {
//       user = await loadJson(`https://api.github.com/users/${name}`);
//       break; // ошибок не было, выходим из цикла
//     } catch (err) {
//       if (err instanceof HttpError && err.response.status == 404) {
//         // после alert начнётся новая итерация цикла
//         alert('Такого пользователя не существует, пожалуйста, повторите ввод.');
//       } else {
//         // неизвестная ошибка, пробрасываем её
//         throw err;
//       }
//     }
//   }
//   alert(`Полное имя: ${user.name}.`);
//   return user;
// }
// demoGithubUser();

// ВЫЗОВИТЕ ASYNC из обычной

// async function wait() {
//   await new Promise((resolve) => setTimeout(resolve, 1000));
//   return 10;
// }
// function f() {
//   wait().then((result) => alert(result));
// }
// f();
