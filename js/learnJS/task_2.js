// В коде ниже класс Rabbit наследует Animal.
// К сожалению, объект класса Rabbit не создаётся. Что не так? Исправьте ошибку.

class Animal {
  constructor(name) {
    this.name = name;
  }

}

class Rabbit extends Animal {
  constructor(name) {
    super(name);
    this.created = Date.now();
  }
}

let rabbit = new Rabbit("Белый кролик"); // Error: this is not defined
console.log(rabbit.name);

// Создайте новый класс ExtendedClock, который будет наследоваться от Clock и 
// добавьте параметр precision – количество миллисекунд между «тиками». Установите значение в 1000 (1 секунда) по умолчанию.

class ExtendedClock extends Clock {
  constructor(settings) {
    super(settings)
	let {precision = 1000} = settings;
	this.precision = precision
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), this.precision);
  }
}

let extendedClock = new ExtendedClock({template: 'h:m:s'});
setTimeout(() => {
	console.log('extended Clock starts')
	extendedClock.start(1000)
}, 3000)
setTimeout(() => {
	console.log('extended Clock stops')
	extendedClock.stop(1000)
}, 5000)