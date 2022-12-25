// // Класссы базовый синтаксис 9.1

// class Clock {
//   constructor({ template }) {
//     this.template = template;
//   }

//   render() {
//     let date = new Date();
//     let hours = date.getHours();
//     if (hours < 10) hours = '0' + hours;

//     let mins = date.getMinutes();
//     if (mins < 10) mins = '0' + mins;

//     let secs = date.getSeconds();
//     if (secs < 10) secs = '0' + secs;

//     let output = this.template
//       .replace('h', hours)
//       .replace('m', mins)
//       .replace('s', secs);

//     console.log(output);
//   }

//   stop() {
//     clearInterval(this.timer);
//   }

//   start() {
//     this.render();
//     this.timer = setInterval(() => this.render, 1000);
//   }
// }

// let clock = new Clock({ template: 'h:m:s' });
// clock.start();

// 9.2 Наследование классов
// Задача 1 Ошибка создания экземпляра класса
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
// }

// class Rabbit extends Animal {
//   constructor(name) {
//     super(name);
//     this.created = Date.now();
//   }
// }

// let rabbit = new Rabbit('Белый кролик');
// alert(rabbit.name);

// Задача 2 Улучшенные часы
// class ExtendedClock extends Clock {
//   constructor(options) {
//     super(options);
//     let { precision = 1000 } = options;
//     this.precision = precision;
//   }
//   start() {
//     this.render();
//     this.timer = setInterval(() => this.render(), this.precision);
//   }
// }

// 9.3  Статические свойства и методы
// Задача 1. Класс расширяет объект?
// class Rabbit extends Object {
//   constructor(name) {
//     super();
//     this.name = name;
//   }
// }
// let rabbit = new Rabbit('Кроль');
// alert(rabbit.hasOwnProperty('name'));

// ДОП ЗАДАНИЕ

// class Rectangle {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }

//   calcArea() {
//     return this.height * this.width;
//   }
// }

// class coloredRectangleWithText extends Rectangle {
//   constructor(width, height, color, text) {
//     super(width, height);
//     this.color = color;
//     this.text = text;
//   }

//   showColor() {
//     return `Прямоугольник цвета ${this.color} `;
//   }

//   showText() {
//     return `Прямоугольник говорит ${this.text} `;
//   }
// }
