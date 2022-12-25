// Перепишите класс
// Класс Clock написан в функциональном стиле. Перепишите его, используя современный синтаксис классов.
class Clock {
    constructor() {
    }

    printTime() {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        console.log(`${hours}:${mins}:${secs}`);
    }

    stop() {
        clearInterval(this.timer);
    }

    start() {
        this.printTime();
        this.timer = setInterval(() => this.printTime(), 1000);
    }
}


// let clock = new Clock();
// clock.start();

// Ошибка создания экземпляра класса
// важность: 5
// В коде ниже класс Rabbit наследует Animal.
//
//     К сожалению, объект класса Rabbit не создаётся. Что не так? Исправьте ошибку.

class Animal {

    constructor(name) {
        this.name = name;
    }

}

class Rabbit extends Animal {
    constructor(name) {
        // необходимо вызвать конструктор суперкласса
        super(name)
        // this.name = name;
        this.created = Date.now();
    }
}

let rabbit = new Rabbit("Белый кролик"); // Error: this is not defined
alert(rabbit.name);

// Создайте новый класс ExtendedClock, который будет наследоваться от Clock
// и добавьте параметр precision – количество миллисекунд между «тиками». Установите значение в 1000 (1 секунда) по умолчанию.
class ExtendedClock extends Clock {
    precision;

    constructor(precision = 1000) {
        super()
        this.precision = precision;
    }

    start() {
        super.printTime();
        this.timer = setInterval(() => this.printTime(), this.precision);
    }
}

let extendedClock = new ExtendedClock(2000);
extendedClock.start();

// Класс расширяет объект?
//     важность: 3
// Как мы уже знаем, все объекты наследуют от Object.prototype и имеют доступ к «общим» методам объекта, например hasOwnProperty.
// Ниже пример кода с таким наследованием (почему он не работает? исправьте его):
class Cat extends Object {
    constructor(name) {
        // не хватало super
        super();
        this.name = name;
    }
}

let cat = new Cat("cat");

alert(cat.hasOwnProperty('name')); // Ошибка

// Свои классы
class Human {
    name;

    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log(`Hi, My name is ${this.name}`)
    }
}

class Programmer extends Human {

    constructor(name) {
        super(name);
    }

    doWork() {
        console.log('print code')
    }
}

class Tester extends Human {

    constructor(name) {
        super(name);
    }

    doWork() {
        console.log('test code')
    }
}

let programmer = new Programmer('Lena');
let tester = new Tester('Ivan');
programmer.sayHello();
programmer.doWork();
tester.sayHello();
tester.doWork();
